import { Prisma } from "../../../generated/prisma/index.js";

export type GetMeResponseBody = Prisma.UserGetPayload<{
  select: {
    login: true,
    role: true,
    id: true,
    sub: true
  }
}>