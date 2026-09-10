import { prisma } from "../../initDB.js";
import { hashSync } from "bcrypt";
const dataToBeReturned = {
    login: true,
    role: true,
    customMonetaryRewardAmount: true,
    totalPayableReward: true,
    // attractedSubs: true,
    createdAt: true
};
export const createUserRequestHandler = async (req, res) => {
    const { body: input } = req;
    const { login: createdBy } = res.locals.userData;
    const newUser = await createUser(input, createdBy);
    res.json(newUser);
};
export function createUser(input, createdBy, trn = prisma) {
    validateInput();
    return trn.user.create({
        data: {
            ...input,
            pwd: hashSync(input.pwd, 10),
            createdAt: new Date(),
            createdBy: {
                connect: {
                    login: createdBy
                }
            }
        },
        select: dataToBeReturned
    });
}
function validateInput() {
}
