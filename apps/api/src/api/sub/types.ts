import { type User, type Package, type Sub } from "../../../generated/prisma/client.ts";
import { PackageCreateInput } from "../../../generated/prisma/models.ts";
import { SubCreateInput, type SubDefaultArgs, type SubGetPayload } from "../../../generated/prisma/models/Sub.ts";

export type CreateSubRequestBody = ExcludeNull<Omit<
  SubCreateInput,
  "id" | "secondarySubsAmount" | "totalPayableReward" | "package" | "user" | "attractedSubs" | "attractedBy"
>> & {
  package: ExcludeNull<Pick<PackageCreateInput, "pkgType" | "paymentAmount" | "paymentCurr">> & {
    startDate: string,
    endDate: string,
    paymentDate?: string
  },
  user?: Omit<User, "id" | "subId">,
  attractorId?: string
}

type ExcludeNull<T> = {
  [K in keyof T]: Exclude<T[K], null>
}

export const CREATE_SUB_ARGS = {
  include: {
    package: true
  },
} satisfies SubDefaultArgs

export type CreateSubResponseBody = SubGetPayload<typeof CREATE_SUB_ARGS>




export const GET_SUBS_ARGS = {
  include: {
    package: true,
    attractedSubs: {
      include: {
        package: true,
        user: {
          omit: {
            pwd: true
          }
        }
      }
    },
    user: {
      omit: {
        pwd: true
      }
    }
  }
} satisfies SubDefaultArgs

export type GetSubsListResponseBody = SubGetPayload<typeof GET_SUBS_ARGS>[]






export type GetAssignableSubsResponseBody = SubGetPayload<{}>[]