import { RequestHandler, Request, Response } from "express"
import { Payment, Prisma, Sub, User } from "../../../generated/prisma/index.js"
import { ReplaceDatesWithStrings } from "./types.js"
import dayjs from "dayjs"
import { PrismaTrnClient } from "../types.js"
import { prisma } from "../../initDB.js"
import { Locals } from "../auth/authMiddleware.js"

const NEW_SUB_REWARD_AMOUNT = 50
export type RewardType = "PACKAGE_EXTENSION" | "MONETARY"
export type CreateSubRequestBody = ReplaceDatesWithStrings<
  Pick<
    Prisma.SubCreateInput,
    "epg" | "externalId" | "login" | "pwd" | "m3uPlaylist" | "media" | "note" | "publicKey" | "startDate" | "endDate" | "region" | "pkgType"
  > & {
    payment: Pick<Prisma.PaymentCreateInput, "amount" | "currency" | "date">,
    attractor?: {
      login: User["login"],
      rewardType: RewardType
    }
  }
>

export type CreateSubResponseBody = Sub

export const createSub: RequestHandler<null, CreateSubResponseBody, CreateSubRequestBody, null, Locals> = async (req, res) => {
  const { attractor, payment, startDate, endDate, ...restSub } = req.body
  const {login: actor} = res.locals.userData

  const newSub = await prisma.$transaction(async trn => {
    const paymentId = `${restSub.externalId}_initialPayment`
    const newSub = await trn.sub.create({
      data: {
        ...restSub,
        createdBy: {
          connect: {
            login: actor
          }
        },
        endDate: new Date(endDate),
        startDate: new Date(startDate),
        createdAt: new Date(),
        payments: {
          create: {
            ...payment,
            createdAt: new Date(),
            id: paymentId,
            date: new Date(payment.date),
          }
        },
      }
    })

    if (attractor) {
      await new RewardIssuer({
        attractorLogin: attractor.login,
        newSubId: newSub.externalId,
        paymentId: paymentId,
        trn,
        actor
      }).doRewardAttractor(attractor.rewardType)
    }

    return newSub
  })

  res.json(newSub)
}

class RewardIssuer {
  #trn: PrismaTrnClient
  #paymentId: Payment["id"]
  #newSubId: Sub["externalId"]
  #attractorLogin: User["login"]
  #actor: User["login"]
  constructor({ trn, newSubId, paymentId, attractorLogin, actor }: {
    trn: PrismaTrnClient
    paymentId: Payment["id"]
    newSubId: Sub["externalId"]
    attractorLogin: User["login"]
    actor: User["login"]
  }) {
    this.#trn = trn
    this.#newSubId = newSubId
    this.#paymentId = paymentId
    this.#attractorLogin = attractorLogin
    this.#actor = actor
  }

  async #doMonetaryReward() {
    const { customMonetaryRewardAmount, totalPayableReward: prevTotalPayableReward } = await this.#trn.user.findFirstOrThrow({
      where: {
        login: this.#attractorLogin
      }
    })
    const { totalPayableReward: newTotalPayableReward } = await this.#trn.user.update({
      where: {
        login: this.#attractorLogin
      },
      data: {
        totalPayableReward: {
          increment: NEW_SUB_REWARD_AMOUNT
        }
      }
    })

    await this.#trn.userRewardTriggeredAuditEvent.create({
      data: {
        customMonetaryRewardAmount,
        rewardType: "NEW_SUB",
        rewardAmount: NEW_SUB_REWARD_AMOUNT,
        prevTotalPayableReward,
        newTotalPayableReward,
        createdAt: new Date(),
        referalDetails_attractedSubExternalId: this.#newSubId
      }
    })
  }

  async #do6MonthsExtension() {
    const { sub } = await this.#trn.user.findFirstOrThrow({
      where: {
        login: this.#attractorLogin
      },
      include: {
        sub: true
      }
    })
    if (!sub) throw "No package to extend"
    const { endDate: prevEndDate, externalId } = sub

    // extend from the previous end date or current date whichever is bigger
    const baseDate = new Date(Math.max(new Date().getTime(), prevEndDate.getTime()))

    const newEndDate = dayjs(baseDate).add(6, "M").toDate()
    await this.#trn.sub.update({
      where: {
        externalId
      },
      data: {
        endDate: newEndDate
      }
    })

    await this.#trn.subPackageExtendedAuditEvent.create({
      data: {
        newEndDate: newEndDate,
        prevEndDate,
        createdAt: new Date(),
        reason: "NEW_SUB_ATTRACTED",
        subExternalId: externalId,
        paymentId: this.#paymentId,
        attractedSubExternalId: this.#newSubId,
        createdByUserId: this.#actor
      }
    })
  }



  async doRewardAttractor(rewardType: RewardType) {
    const effectiveAttractorTier = (await this.#trn.user.findFirstOrThrow({
      where: {
        login: this.#attractorLogin
      },
      select: {
        attractedSubs: true
      }
    })).attractedSubs.length + 1

    await this.#trn.referalDetails.create({
      data: {
        attractedSubExternalId: this.#newSubId,
        attractorUserId: this.#attractorLogin,
        effectiveAttractorTier
      }
    })

    await (
      rewardType === "PACKAGE_EXTENSION" && effectiveAttractorTier <= 5
        ? this.#do6MonthsExtension()
        : this.#doMonetaryReward()
    )
  }
}