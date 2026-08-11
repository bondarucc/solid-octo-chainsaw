import { Prisma } from "../../../generated/prisma/index.js";

export type GetMeResponseBody = Prisma.UserGetPayload<{
  select: {
    login: true,
    role: true,
    customMonetaryRewardAmount: true,
    createdAt: true,
    totalPayableReward: true,
    sub: true
  }
}>