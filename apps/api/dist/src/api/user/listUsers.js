import { prisma } from "../../initDB.js";
const dataToBeReturned = {
    login: true,
    role: true,
    customMonetaryRewardAmount: true,
    totalPayableReward: true,
    attractedSubs: true,
    createdAt: true,
    subExternalId: true,
    note: true
};
export const listUsers = async ({ query }, res) => {
    const { login, assignable } = query;
    const users = await prisma.user.findMany({
        where: {
            login,
            subExternalId: assignable ? null : undefined
        },
        select: dataToBeReturned
    });
    // const [reps] = await Promise.all([
    //   prisma.userRepaymentAuditEvent.groupBy({
    //     by: "userId",
    //     where: {
    //       userId: {
    //         in: users.map(({ login }) => login)
    //       }
    //     },
    //     _sum: {
    //       repaymentAmount: true
    //     }
    //   }),
    //   prisma.referalDetails.groupBy({
    //     by: "attractorUserId",
    //     where: {
    //       attractorUserId: {
    //         in: users.map(({ login }) => login)
    //       }
    //     },
    //     _sum: {
    //     }
    //   })
    // ])
    // const { _sum: { repaymentAmount } } = await prisma.userRepaymentAuditEvent.aggregate({
    //   where: {
    //     userId: login
    //   },
    //   _sum: {
    //     repaymentAmount: true
    //   }
    // })
    // const { _sum: { rewardAmount } } = await prisma.userRewardTriggeredAuditEvent.aggregate({
    //   where: {
    //     referalDetails: {
    //       attractorUserId: login
    //     }
    //   },
    //   _sum: {
    //     rewardAmount: true
    //   }
    // })
    res.json(users);
};
