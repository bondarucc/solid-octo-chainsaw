import type { RequestHandler } from "express"
import type { Sub, User } from "../../../generated/prisma/index.js"
import { createUser, type CreateUserRequestBody } from "../user/createUser.js"
import { prisma } from "../../initDB.js"
import type { Locals } from "../auth/authMiddleware.js"

export type SubPromotionRequestBody = {
  type: "existingUser",
  login: User["login"]
} | {
  type: "newUser",
  
} & CreateUserRequestBody

export type SubPromotionResponseBody = Sub


export const promoteSub: RequestHandler<{externalId: Sub["externalId"]}, SubPromotionResponseBody, SubPromotionRequestBody, null, Locals> = async ({params: {externalId}, body}, res) => {
  const {login: actor} = res.locals.userData

  const sub = await prisma.sub.findFirstOrThrow({
    where: {externalId},
    include: {
      user: true,
      referalDetails: true
    }
  })

  if (sub.user) throw "this sub is a partner already"

  const updatedSub = await prisma.$transaction(async trn => {
    if (body.type === "existingUser") {
      const existingUser = await prisma.user.findFirstOrThrow({
        where: {login: body.login}
      })
  
      if (existingUser.subExternalId) throw "selected user is already assigned to another sub"

      if (sub.referalDetails?.attractorUserId === existingUser.login) throw "self referring"
  
    } else {
      const {type, ...rest} = body
      await createUser(rest, actor, trn)
    }
  
    return await trn.sub.update({
      where: {externalId},
      data: {
        user: {
          connect: {
            login: body.login
          }
        }
      }
    })
  })

  res.json(updatedSub)
}