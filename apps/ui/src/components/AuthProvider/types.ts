import type { Sub, User } from "../../../../api/generated/prisma/index";

export type AuthContextShape = Pick<Sub, "totalPayableReward" | "externalId"> & Pick<User, "login" | "role">