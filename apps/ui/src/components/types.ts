import type { Package, Sub, User } from "../../../api/generated/prisma/index"
import type { RewardType } from "../../../api/src/api/sub/types.ts"
import type { RecursivePartial, ReplaceDatesWithStrings } from "../helpers/types.ts"

// export type CreateSubFormShape = RecursivePartial<Pick<
//   Sub,
//   "externalId" | "attractorId" | "epg" | "login" | "note" | "m3uPlaylist" | "pwd"
// > & {
//   package: (ReplaceDatesWithStrings<Pick<Package, "paymentAmount" | "paymentCurr" | "paymentDate" | "pkgType">> & {
//     activationPeriod: [string | null, string | null] | null
//   }) | null
//   user: Omit<User, "id" | "subId"> | null
// }>

export type CreateSubFormShape = Pick<
  Sub,
  "externalId" | "login" | "pwd" | "epg" | "m3uPlaylist"| "media" | "publicKey" | "note" | "customMonetaryRewardAmount"
> & {
  user: Omit<User, "id" | "subId"> | null
  package: ReplaceDatesWithStrings<Pick<Package, "paymentAmount" | "paymentCurr" | "paymentDate" | "pkgType" | "region">> & {
    activationPeriod: [string | null, string | null] | null
  },
  attractor: {
    rewardType?: RewardType
    externalId?: string
  }
}

