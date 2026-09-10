import { prisma } from "../../initDB.js";
import { hashSync } from "bcrypt";
const MODIFIABLE_KEYS = Array.from(new Set(["pwd", "customMonetaryRewardAmount", "role", "note"]));
const TRACKABLE_KEYS = Array.from(new Set(["customMonetaryRewardAmount", "role", "note"]));
export const updateUser = async function (req, res) {
    const { login } = req.params;
    const { pwd, customMonetaryRewardAmount, note, role } = req.body;
    const { userData: { login: actor } } = res.locals;
    const updatedUser = await prisma.$transaction(async (trn) => {
        const prevData = await trn.user.findFirstOrThrow({ where: { login } });
        const updatedData = await trn.user.update({
            where: { login },
            data: {
                pwd: pwd ? hashSync(pwd, 10) : undefined,
                customMonetaryRewardAmount: customMonetaryRewardAmount,
                note,
                role,
            }
        });
        const diff = JSON.stringify(generateDiff(prevData, updatedData));
        if (diff !== "{}") {
            await trn.entityUpdatedAuditEvent.create({
                data: {
                    createdAt: new Date(),
                    entityId: login,
                    entityType: "USER",
                    diff,
                    createdByUserId: actor
                }
            });
        }
        return updatedData;
    });
    return res.json(updatedUser);
};
function generateDiff(prevData, newData) {
    const initialReduceValue = {
        pwd: prevData.pwd !== newData.pwd
            ? {
                prevValue: "***",
                newValue: "***"
            }
            : undefined
    };
    const diff = Array.from(TRACKABLE_KEYS).reduce((acc, key) => {
        return {
            ...acc,
            [key]: prevData[key] !== newData[key]
                ? {
                    prevValue: prevData[key],
                    newValue: newData[key],
                }
                : undefined
        };
    }, initialReduceValue);
    return diff;
}
