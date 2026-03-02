import { Package, Sub, User } from "../../../generated/prisma/client.ts";
import type { PackageGetPayload, SubGetPayload, UserGetPayload } from "../../../generated/prisma/models.ts";


export type GetUsersListResponseBody = UserGetPayload<{
  omit: {
    pwd: true
  },
  include: {
    sub: true
  }
}>[]


export type CreateUserRequestBody = UserGetPayload<{
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
      sub: SubGetPayload<{
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

export type CreateUserResponseBody = UserGetPayload<{
  omit: {
    pwd: true
  }
}>

