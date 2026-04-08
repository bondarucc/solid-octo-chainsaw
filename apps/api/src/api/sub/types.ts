import { type User, type Package, type Sub, SC_AE } from "../../../generated/prisma/client.ts";
import { PackageCreateInput, SC_AEGetPayload, SPE_AEGetPayload, SRT_AEGetPayload } from "../../../generated/prisma/models.ts";
import { SubCreateInput, type SubDefaultArgs, type SubGetPayload } from "../../../generated/prisma/models/Sub.ts";

export type CreateSubRequestBody = Pick<
  SubCreateInput,
  "epg" | "externalId" | "login" | "pwd" | "m3uPlaylist" | "media" | "note" | "publicKey"
> & {
  package: Pick<PackageCreateInput, "pkgType" | "paymentAmount" | "paymentCurr" | "region"> & {
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
} satisfies SubDefaultArgs

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
} satisfies SubDefaultArgs

export type GetSubsListResponseBody = SubGetPayload<typeof GET_SUBS_ARGS>[]

export type GetAssignableSubsResponseBody = SubGetPayload<{}>[]

// export type GetSubAuditEventsResponseBody = {
//   sc: SC_AE
//   spe: SPE_AEGetPayload<{ include: { sc_ae: { include: { sub: true } } } }>[]
//   srt: SRT_AEGetPayload<{ include: { sc_ae: { include: { sub: true } } } }>[]
//   sssai_ae: SSSAI_AEGetPayload<{ include: { sc_ae: { include: { sub: { include: { attractedBy: true } } } } } }>[]
// }

export type GetSubAuditEventsResponseBody = (
  | { type: "SC" } & SC_AE
  | { type: "SPE" } & SPE_AEGetPayload<{ include: { sc_ae: { include: { sub: true } } } }>
  | { type: "SRT" } & SRT_AEGetPayload<{ include: { sc_ae: { include: { sub: true } } } }>)[]