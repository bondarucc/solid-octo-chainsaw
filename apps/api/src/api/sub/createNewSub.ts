import { hashSync } from "bcrypt";
import dayjs from "dayjs";
import type { SC_AE } from "../../../generated/prisma/client.ts";
import type { SubGetPayload } from "../../../generated/prisma/models.ts";
import { prisma } from "../../initDB.ts";
import type { PrismaTrnClient } from "../types.ts";
import type { RewardType, CreateSubRequestBody, CreateSubResponseBody } from "./types.ts";

export default async function createNewSub(sub: CreateSubRequestBody): Promise<CreateSubResponseBody> {
  const { package: pkg, attractor, user, ...restSub } = sub
  const effectiveAttractorTier = attractor?.externalId
    ? (await prisma.sub.findFirstOrThrow({
        where: {
          externalId: attractor.externalId
        },
        select: {
          attractedSubs: true
        }
      })).attractedSubs.length + 1
    : undefined

  return await prisma.$transaction(async trn => {
    const { attractedBy, sc_ae, ...newSub } = await trn.sub.create({
      data: {
        ...restSub,

        package: {
          create: {
            ...pkg,
            endDate: new Date(sub.package.endDate),
            startDate: new Date(sub.package.startDate),
            paymentDate: sub.package.paymentDate && new Date(sub.package.paymentDate),


          }
        },
        user: user && {
          create: {
            ...user,
            pwd: hashSync(user.pwd, 10)
          }
        },
        sc_ae: {
          create: {
            timestamp: new Date(),
            attractorTier: effectiveAttractorTier
          }
        },
        ...(attractor
          ? {
            attractedBy: {
              connect: {
                externalId: attractor.externalId
              }
            }
          }
          : {}
        )

      },
      include: {
        attractedBy: {
          select: {
            attractedSubs: true,
            package: true,
            id: true,
            totalPayableReward: true
          }
        },
        sc_ae: true
      }

    })

    if (attractedBy)
      await doRewardAttractor({
        attractor: attractedBy,
        rewardType: attractor!.rewardType,
        trn,
        sc_ae: sc_ae!
      })

    return newSub
  })
}

function factory(
  { attractor, sc_ae, trn }:
    {
      attractor: SubGetPayload<{ select: { package: true, id: true, totalPayableReward: true } }>
      sc_ae: SC_AE
      trn: PrismaTrnClient
    }
) {
  const { package: pkg, id: attractorId, totalPayableReward } = attractor
  const { endDate: pkgEndDate, id: pkgId } = pkg ?? {}

  return {
    do6MonthsExtension: async () => {
      const newEndDate = dayjs(pkgEndDate).add(6, "M").toDate()
      await trn.package.update({
        where: {
          id: pkgId
        },
        data: {
          endDate: newEndDate
        }
      })

      await trn.sPE_AE.create({
        data: {
          newEndDate: newEndDate,
          prevEndDate: pkgEndDate!,
          timestamp: new Date(),
          package: {
            connect: {
              id: pkgId
            }
          },
          sc_ae: {
            connect: {
              id: sc_ae.id
            }
          }
        }
      })
    },

    doMonetaryReward: async () => {
      await trn.sub.update({
        where: {
          id: attractorId
        },
        data: {
          totalPayableReward: {
            increment: 50
          }
        }
      })

      await trn.sRT_AE.create({
        data: {
          rewardAmount: 50,
          prevTotalPayableReward: totalPayableReward,
          newTotalPayableReward: totalPayableReward + 50,
          rewardType: "NEW_SUB",
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
  }
}

async function doRewardAttractor(
  { attractor, rewardType, trn, sc_ae }:
    {
      rewardType: RewardType
      attractor: SubGetPayload<{ select: { attractedSubs: true, package: true, id: true, totalPayableReward: true } }>
      trn: PrismaTrnClient
      sc_ae: SC_AE
    }
) {
  const { do6MonthsExtension, doMonetaryReward } = factory({ attractor, trn, sc_ae })
  const tier = attractor.attractedSubs.length
  if (rewardType === "PACKAGE_EXTENSION" && tier <= 5) {
    await do6MonthsExtension()
  } else await doMonetaryReward()
}