import type { User, Package, Sub, SC_AE } from "../../../generated/prisma/client.ts";
import type { } from "../../../generated/prisma/index.js";
import type { Prisma } from "../../../generated/prisma/index.js";



export type CreateSubRequestBody = Pick<
  Prisma.SubCreateInput,
  "epg" | "externalId" | "login" | "pwd" | "m3uPlaylist" | "media" | "note" | "publicKey"
> & {
  package: Pick<Prisma.PackageCreateInput, "pkgType" | "paymentAmount" | "paymentCurr" | "region"> & {
    startDate: string,
    endDate: string,
    paymentDate?: string
  },
  user?: Omit<User, "id" | "subId">,
  attractor?: {
    externalId: Sub["externalId"],
    rewardType: RewardType
  }
}

export type RewardType = "PACKAGE_EXTENSION" | "MONETARY"

type ExcludeNull<T> = {
  [K in keyof T]: Exclude<T[K], null>
}

export const CREATE_SUB_ARGS = {
  include: {
    package: true
  },
} satisfies Prisma.SubDefaultArgs

export type CreateSubResponseBody = Sub




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
    },
    attractedBy: {
      select: {
        externalId: true
      }
    }
  }
} satisfies Prisma.SubDefaultArgs

export type GetSubsListResponseBody = Prisma.SubGetPayload<typeof GET_SUBS_ARGS>[]

export type GetAssignableSubsResponseBody = Prisma.SubGetPayload<{}>[]

// export type GetSubAuditEventsResponseBody = {
//   sc: SC_AE
//   spe: SPE_AEGetPayload<{ include: { sc_ae: { include: { sub: true } } } }>[]
//   srt: SRT_AEGetPayload<{ include: { sc_ae: { include: { sub: true } } } }>[]
//   sssai_ae: SSSAI_AEGetPayload<{ include: { sc_ae: { include: { sub: { include: { attractedBy: true } } } } } }>[]
// }

export type GetSubAuditEventsResponseBody = (
  | { type: "SC" } & SC_AE
  | { type: "SPE" } & Prisma.SPE_AEGetPayload<{ include: { sc_ae: { include: { sub: true } } } }>
  | { type: "SR" } & Prisma.SR_AEGetPayload<{}>
  | { type: "SRT" } & Prisma.SRT_AEGetPayload<{ include: { sc_ae: { include: { sub: true } } } }>)[]