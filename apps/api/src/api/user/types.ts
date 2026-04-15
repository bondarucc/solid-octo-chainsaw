import type { Package, Sub, User } from "../../../generated/prisma/client.ts";
import type { Prisma } from "../../../generated/prisma/index.js";


export type GetUsersListResponseBody = Prisma.UserGetPayload<{
  omit: {
    pwd: true
  },
  include: {
    sub: true
  }
}>[]


export type CreateUserRequestBody = Prisma.UserGetPayload<{
  omit: {
    id: true,
    subId: true
  },
}> & (
    {
      subId: Sub["id"]
      sub?: never
    } | {
      subId?: never,
      sub: Prisma.SubGetPayload<{
        omit: {
          id: true,
          totalPayableReward: true,
          secondarySubsAmount: true
        },
      }> & {
        package: Pick<Package, "paymentAmount" | "paymentCurr" | "pkgType"> & {
          endDate: string
          startDate: string
          paymentDate: string
        }
      }
    }
  )

export type CreateUserResponseBody = Prisma.UserGetPayload<{
  omit: {
    pwd: true
  }
}>

