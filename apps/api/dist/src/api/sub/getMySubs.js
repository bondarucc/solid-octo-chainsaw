import { prisma } from "../../initDB.js";
import { calculateRewardAmount } from "./extendSubPackage.js";
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
    endDate: true,
    referalDetails: {
        select: {
            effectiveAttractorTier: true
        }
    }
};
export const getMySubs = async (req, res) => {
    const { login, customMonetaryRewardAmount } = res.locals.userData;
    const subs = await prisma.sub.findMany({
        where: {
            referalDetails: {
                attractorUserId: login
            }
        },
        select: dataToBeReturned
    });
    const earningsSummary = await prisma.userRewardTriggeredAuditEvent.groupBy({
        by: "referalDetails_attractedSubExternalId",
        where: {
            referalDetails: {
                attractorUserId: login
            }
        },
        _sum: {
            rewardAmount: true
        }
    });
    const subsWithStats = subs.map(sub => {
        return {
            ...sub,
            totalEarningsPerSub: earningsSummary.find(v => v.referalDetails_attractedSubExternalId === sub.externalId)?._sum.rewardAmount ?? 0,
            potentialIncomeIfExtended: calculateRewardAmount({
                attractedSubsAmount: subs.length,
                customMonetaryRewardAmount,
                effectiveAttractorTier: sub.referalDetails.effectiveAttractorTier
            })
                .rewardAmount
        };
    });
    const { _sum: { repaymentAmount } } = await prisma.userRepaymentAuditEvent.aggregate({
        where: {
            userId: login
        },
        _sum: {
            repaymentAmount: true
        },
    });
    const { _sum: { rewardAmount } } = await prisma.userRewardTriggeredAuditEvent.aggregate({
        where: {
            referalDetails: {
                attractorUserId: login
            }
        },
        _sum: {
            rewardAmount: true
        }
    });
    res.json({
        subs: subsWithStats,
        totalRepayments: repaymentAmount ?? 0,
        totalEarnings: rewardAmount ?? 0
    });
};
