import dayjs from "dayjs";
import { prisma } from "../../initDB.js";
const MAX_TIER = 25;
export const extendSubPackage = async (req, res) => {
    const { externalId } = req.params;
    const { paymentDetails } = req.body;
    const { login: actor } = res.locals.userData;
    const updatedSub = await doExtend({ externalId, paymentDetails, actor });
    res.json(updatedSub);
};
async function doExtend({ externalId, actor, paymentDetails: { amount, currency, date } }) {
    const { endDate: prevEndDate } = await prisma.sub.findFirstOrThrow({
        where: {
            externalId
        },
    });
    return await prisma.$transaction(async (trn) => {
        // extend from the previous end date or current date whichever is bigger
        const baseDate = new Date(Math.max(new Date().getTime(), prevEndDate.getTime()));
        const newEndDate = dayjs(baseDate).add(1, "y").toDate();
        const newPayment = await trn.payment.create({
            data: {
                amount,
                currency,
                date: new Date(date),
                sub: {
                    connect: {
                        externalId
                    }
                },
                createdAt: new Date()
            }
        });
        const { id: spe_ae_id } = await trn.subPackageExtendedAuditEvent.create({
            data: {
                prevEndDate,
                newEndDate,
                reason: "PAID_EXTENSION",
                createdAt: new Date(),
                payment: {
                    connect: {
                        id: newPayment.id
                    }
                },
                createdBy: {
                    connect: {
                        login: actor
                    }
                },
                sub: {
                    connect: {
                        externalId
                    }
                }
            }
        });
        const updatedSub = await trn.sub.update({
            where: {
                externalId
            },
            data: {
                endDate: newEndDate,
            },
            include: {
                referalDetails: REWARD_ATTRACTOR_DATA_REQUIRED
            }
        });
        if (updatedSub.referalDetails) {
            await doRewardAttractor({ trn, referalDetails: updatedSub.referalDetails, spe_ae_id });
        }
        return updatedSub;
    });
}
const REWARD_ATTRACTOR_DATA_REQUIRED = { include: { attractor: { include: { attractedSubs: true } } } };
async function doRewardAttractor({ spe_ae_id, trn, referalDetails: { effectiveAttractorTier, attractedSubExternalId, attractorUserId, attractor: { attractedSubs, customMonetaryRewardAmount, totalPayableReward: prevTotalPayableReward } } }) {
    const { rewardAmount, highestTierReached } = calculateRewardAmount({
        attractedSubsAmount: attractedSubs.length,
        effectiveAttractorTier,
        customMonetaryRewardAmount
    });
    if (rewardAmount === 0)
        return;
    const { totalPayableReward: newTotalPayableReward } = await trn.user.update({
        data: {
            totalPayableReward: {
                increment: rewardAmount
            }
        },
        where: {
            login: attractorUserId
        }
    });
    await trn.userRewardTriggeredAuditEvent.create({
        data: {
            rewardAmount,
            prevTotalPayableReward,
            newTotalPayableReward,
            rewardType: "SUB_EXT",
            customMonetaryRewardAmount,
            highestTierReached,
            createdAt: new Date(),
            referalDetails: {
                connect: {
                    attractedSubExternalId
                }
            },
            spe_ae: {
                connect: {
                    id: spe_ae_id
                }
            }
        }
    });
}
export function calculateRewardAmount({ attractedSubsAmount, effectiveAttractorTier, customMonetaryRewardAmount }) {
    const highestTierReached = attractedSubsAmount > MAX_TIER;
    return {
        rewardAmount: effectiveAttractorTier <= 5 && !highestTierReached
            ? 0
            : customMonetaryRewardAmount ?? Math.min(MAX_TIER, Math.ceil(effectiveAttractorTier / 5) * 5),
        highestTierReached
    };
}
