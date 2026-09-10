import { prisma } from "../../initDB.js";
import { sortAuditEventsByTimestamp } from "./helpers.js";
import dayjs from "dayjs";
const JournalEntryTypeToResponseBodyMapping = {
    USER_CREATED: {
        select: {
            login: true,
            createdAt: true,
            createdByUserId: true,
        }
    },
    SUB_CREATED: {
        select: {
            externalId: true,
            createdAt: true,
            createdByUserId: true,
            referalDetails: {
                select: {
                    attractorUserId: true,
                    spe_ae: true,
                    urt_ae: {
                        where: {
                            rewardType: "NEW_SUB"
                        }
                    }
                }
            }
        },
    },
    REPAYMENT_TRIGGERED: {
        select: {
            createdByUserId: true,
            userId: true,
            createdAt: true,
            repaymentAmount: true
        }
    },
    DETAILS_UPDATED: {
        select: {
            createdAt: true,
            createdByUserId: true,
            diff: true,
            entityId: true,
            entityType: true
        }
    },
    PAID_EXTENSION: {
        select: {
            createdAt: true,
            createdByUserId: true,
            subExternalId: true,
            urt_ae: {
                select: {
                    rewardAmount: true,
                    referalDetails: {
                        select: {
                            attractorUserId: true
                        }
                    }
                }
            },
        }
    }
};
const DATE_FORMAT = "YYYY-MM-DD";
export const getActivityJournal = async (req, res) => {
    const { from, to, objectBy, objectId } = {
        ...req.query,
        from: req.query.from && dayjs(req.query.from, DATE_FORMAT).startOf("D").toDate(),
        to: req.query.to && dayjs(req.query.to, DATE_FORMAT).endOf("D").toDate()
    };
    const { subExternalId, userLogin } = await resolveObjectCredentials(objectBy, objectId);
    const usersCreated = subExternalId && !userLogin
        ? []
        : (await prisma.user.findMany({
            where: {
                createdAt: from && to
                    ? {
                        gte: from,
                        lte: to
                    } : undefined,
                login: userLogin
            },
            ...JournalEntryTypeToResponseBodyMapping.USER_CREATED
        })).map(user => ({ data: user, type: "USER_CREATED" }));
    const subsCreated = (await prisma.sub.findMany({
        where: {
            createdAt: from && to
                ? {
                    gte: from,
                    lte: to
                } : undefined,
            ...(subExternalId || userLogin
                ? {
                    OR: [
                        {
                            externalId: subExternalId
                        },
                        {
                            referalDetails: {
                                attractorUserId: userLogin
                            }
                        }
                    ]
                }
                : {}),
        },
        ...JournalEntryTypeToResponseBodyMapping.SUB_CREATED
    })).map(sub => ({ data: sub, type: "SUB_CREATED" }));
    const repaymentsTriggered = subExternalId && !userLogin
        ? []
        : (await prisma.userRepaymentAuditEvent.findMany({
            where: {
                createdAt: from && to
                    ? {
                        gte: from,
                        lte: to
                    } : undefined,
                userId: userLogin
            },
            ...JournalEntryTypeToResponseBodyMapping.REPAYMENT_TRIGGERED
        })).map(repayment => ({ data: repayment, type: "REPAYMENT_TRIGGERED" }));
    const paidExtensions = (await prisma.subPackageExtendedAuditEvent.findMany({
        where: {
            createdAt: from && to
                ? {
                    gte: from,
                    lte: to
                } : undefined,
            reason: "PAID_EXTENSION",
            ...(subExternalId || userLogin
                ? {
                    OR: [
                        {
                            subExternalId,
                        },
                        {
                            urt_ae: {
                                referalDetails: {
                                    attractorUserId: userLogin
                                }
                            }
                        }
                    ]
                }
                : {})
        },
        ...JournalEntryTypeToResponseBodyMapping.PAID_EXTENSION
    })).map(repayment => ({ data: repayment, type: "PAID_EXTENSION" }));
    const detailsUpdated = (await prisma.entityUpdatedAuditEvent.findMany({
        where: {
            createdAt: from && to
                ? {
                    gte: from,
                    lte: to
                } : undefined,
            entityId: subExternalId || userLogin
                ? {
                    in: [
                        ...(subExternalId ? [subExternalId] : []),
                        ...(userLogin ? [userLogin] : []),
                    ]
                } : undefined
        }
    })).map(repayment => ({ data: repayment, type: "DETAILS_UPDATED" }));
    const sortedEvents = sortAuditEventsByTimestamp([...usersCreated, ...subsCreated, ...repaymentsTriggered, ...paidExtensions, ...detailsUpdated]);
    res.json({
        data: sortedEvents,
        subExternalId,
        userLogin
    });
};
async function resolveObjectCredentials(objectBy, objectId) {
    if (!objectBy || !objectId)
        return {};
    const subExternalId = objectBy === "externalId"
        ? objectId
        : (await prisma.user.findUniqueOrThrow({ where: { login: objectId }, include: { sub: true } })).sub?.externalId;
    const userLogin = objectBy === "login"
        ? objectId
        : (await prisma.sub.findUniqueOrThrow({ where: { externalId: objectId }, include: { user: true } })).user?.login;
    return {
        subExternalId, userLogin
    };
}
