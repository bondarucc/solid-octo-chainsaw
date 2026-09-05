import type { RequestHandler, Response } from "express";
import { Prisma } from "../../../generated/prisma/client.js";
import { prisma } from "../../initDB.js";
import { hashSync } from "bcrypt";
import type { PrismaTrnClient } from "../types.js";
import type { Locals } from "../auth/authMiddleware.js";

export type CreateUserResponseBody = Prisma.UserGetPayload<{select: typeof dataToBeReturned}>

const dataToBeReturned = {
  login: true,
  role: true,
  customMonetaryRewardAmount: true,
  totalPayableReward: true,
  // attractedSubs: true,
  createdAt: true
} as const satisfies Prisma.UserSelect

export type CreateUserRequestBody = Pick<Prisma.UserCreateInput, "login" | "pwd" | "customMonetaryRewardAmount" | "role" | "note">

export const createUserRequestHandler: RequestHandler<null, CreateUserResponseBody, CreateUserRequestBody, null, Locals> = async (req, res) => {
  const {body: input} = req
  const {login: createdBy} = res.locals.userData
  const newUser = await createUser(input, createdBy)

  res.json(newUser)
}

export function createUser(input: CreateUserRequestBody, createdBy: string, trn: PrismaTrnClient = prisma) {
  validateInput()
  
  return trn.user.create({
    data: {
      ...input,
      pwd: hashSync(input.pwd, 10),
      createdAt: new Date(),
      createdBy: {
        connect: {
          login: createdBy
        }
      }
    },
    select: dataToBeReturned
  })
}

function validateInput() {

}
