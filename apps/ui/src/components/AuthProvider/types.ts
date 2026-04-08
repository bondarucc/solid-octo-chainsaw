import type { Sub, User } from "../../../../api/generated/prisma/browser";

export type AuthContextShape = Pick<Sub, "totalPayableReward" | "externalId"> & Pick<User, "login" | "role">