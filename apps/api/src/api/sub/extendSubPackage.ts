import dayjs from "dayjs";
import { SC_AE, type Sub } from "../../../generated/prisma/client.js";
import { prisma } from "../../initDB.js"
import { PrismaTrnClient } from "../types.js";
import type { Prisma } from "../../../generated/prisma/index.js";




export async function extendSubPackage(id: Sub["id"]) {
  const currentPkg = await prisma.package.findFirstOrThrow({
    where: {
      subId: id
    },
  })

  await prisma.$transaction(async trn => {
    const newEndDate = dayjs(currentPkg.endDate).add(1, "y").toDate()
    const { sub: extendedSub } = await trn.package.update({
      where: {
        id: currentPkg.id
      },
      data: {
        endDate: newEndDate,
        spe_ae: {
          create: {
            timestamp: new Date(),
            newEndDate: newEndDate,
            prevEndDate: currentPkg.endDate
          }
        }
      },
      select: {
        sub: {
          select: {
            attractedBy: {
              select: { id: true, totalPayableReward: true, customMonetaryRewardAmount: true, attractedSubs: true }
            },
            sc_ae: true
          }
        }
      }
    })

    if (extendedSub.attractedBy && extendedSub.sc_ae) 
      await processAttractor({ trn, attractor: extendedSub.attractedBy, sc_ae: extendedSub.sc_ae })

  })

  return

}

async function processAttractor({ sc_ae, trn, attractor }: { sc_ae: SC_AE, trn: PrismaTrnClient, attractor: Prisma.SubGetPayload<{ select: { id: true, totalPayableReward: true, customMonetaryRewardAmount: true, attractedSubs: true } }> }) {
  const { attractorTier } = sc_ae
  const { id: attractorId, totalPayableReward: prevTotalPayableReward, customMonetaryRewardAmount, attractedSubs } = attractor
  const directSubsAmount = attractedSubs.length
  const highestTierReached = directSubsAmount > 25
  if (attractorTier == null || (attractorTier <= 5 && !highestTierReached)) return
  const rewardAmount = customMonetaryRewardAmount !== null
    ? customMonetaryRewardAmount
    : highestTierReached
      ? 25
      : Math.min(25, Math.ceil(attractorTier / 5) * 5)

  await trn.sub.update({
    data: {
      totalPayableReward: {
        increment: rewardAmount
      }
    },
    where: {
      id: attractorId
    }
  })

  await trn.sRT_AE.create({
    data: {
      rewardAmount,
      prevTotalPayableReward,
      newTotalPayableReward: prevTotalPayableReward + rewardAmount,
      rewardType: "SUB_EXT",
      customMonetaryRewardAmount,
      highestTierReached,
      timestamp: new Date(),
      sub: {
        connect: {
          id: attractorId
        }
      },
      sc_ae: {
        connect: {
          id: sc_ae.id
        }
      }
    }
  })


}