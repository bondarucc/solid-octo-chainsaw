import type { Package, Sub, User } from "../../../api/generated/prisma/browser.ts"
import type { RecursivePartial, ReplaceDatesWithStrings } from "../helpers/types.ts"

export type CreateSubFormShape = RecursivePartial<Pick<
  Sub,
  "externalId" | "archive" | "attractorId" | "epg" | "login" | "note" | "playlist" | "stalkerPortal" | "pwd"
> & {
  package: (ReplaceDatesWithStrings<Pick<Package, "paymentAmount" | "paymentCurr" | "paymentDate" | "pkgType">> & {
    activationPeriod: [string | null, string | null] | null
  }) | null
  user: Omit<User, "id" | "subId"> | null
}>