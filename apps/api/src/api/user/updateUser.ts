import { RequestHandler } from "express";
import { Prisma, User } from "../../../generated/prisma/index.js";
import { prisma } from "../../initDB.js";
import { hashSync } from "bcrypt";
import { Locals } from "../auth/authMiddleware.js";

const MODIFIABLE_KEYS = Array.from(new Set(["pwd", "customMonetaryRewardAmount", "role", "note"] as const satisfies Array<keyof User>))
const TRACKABLE_KEYS = Array.from(new Set(["customMonetaryRewardAmount", "role", "note"] as const satisfies Array<keyof User>))

export type UpdateUserRequestBody = Pick<User, typeof MODIFIABLE_KEYS[number]>

export const updateUser: RequestHandler<{ login: User["login"] }, User, UpdateUserRequestBody, null, Locals> = async function (req, res) {
  const { login } = req.params
  const { pwd, customMonetaryRewardAmount, note, role } = req.body
  const { userData: { login: actor } } = res.locals

  const updatedUser = await prisma.$transaction(async trn => {


    const prevData = await trn.user.findFirstOrThrow({ where: { login } })
    const updatedData = await trn.user.update({
      where: { login },
      data: {
        pwd: pwd ? hashSync(pwd, 10) : undefined,
        customMonetaryRewardAmount: customMonetaryRewardAmount,
        note,
        role,
      }
    })

    const diff = JSON.stringify(generateDiff(prevData, updatedData))

    if (diff !== "{}") {
      await trn.entityUpdatedAuditEvent.create({
        data: {
          createdAt: new Date(),
          entityId: login,
          entityType: "USER",
          diff,
          createdByUserId: actor
        }
      })
    }

    return updatedData
  })
  return res.json(updatedUser)
}

export type UserDiffShape = Partial<{
  [K in keyof UpdateUserRequestBody]: {
    prevValue: UpdateUserRequestBody[K],
    newValue: UpdateUserRequestBody[K],
  }
}>

function generateDiff(prevData: UpdateUserRequestBody, newData: UpdateUserRequestBody): UserDiffShape {

  const initialReduceValue: UserDiffShape = {
    pwd: prevData.pwd !== newData.pwd
      ? {
        prevValue: "***",
        newValue: "***"
      }
      : undefined
  }

  const diff = Array.from(TRACKABLE_KEYS).reduce((acc: UserDiffShape, key) => {
    return {
      ...acc,
      [key]: prevData[key] !== newData[key]
        ? {
          prevValue: prevData[key],
          newValue: newData[key],
        }
        : undefined
    }
  }, initialReduceValue)

  return diff
}