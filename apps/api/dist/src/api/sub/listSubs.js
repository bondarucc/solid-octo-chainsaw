import { prisma } from "../../initDB.js";
const dataToBeReturned = {
    externalId: true,
    login: true,
    pwd: true,
    m3uPlaylist: true,
    epg: true,
    createdAt: true,
    media: true,
    pkgType: true,
    publicKey: true,
    startDate: true,
    region: true,
    endDate: true,
    note: true,
    user: {
        select: {
            login: true
        }
    },
    referalDetails: {
        select: {
            attractorUserId: true
        }
    }
};
export const listSubs = async (req, res) => {
    const { externalId, attractorUser, pkgStatus } = req.query;
    const subs = await prisma.sub.findMany({
        where: {
            externalId: externalId ? externalId : undefined,
            referalDetails: attractorUser ? {
                attractorUserId: attractorUser
            } : undefined,
            endDate: pkgStatusFilterToPrismaInput(pkgStatus)
        },
        select: dataToBeReturned,
    });
    res.json(subs);
};
function pkgStatusFilterToPrismaInput(status) {
    if (status == "ACTIVE") {
        return {
            gte: new Date()
        };
    }
    if (status == "EXPIRED") {
        return {
            lt: new Date()
        };
    }
}
