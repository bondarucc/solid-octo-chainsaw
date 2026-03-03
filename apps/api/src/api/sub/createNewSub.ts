import { hashSync } from "bcrypt";
import { prisma } from "../../initDB.ts";
import { PrismaTrnClient } from "../types.ts";
import processAttractors from "./processAttractors.ts";
import { CREATE_SUB_ARGS, type CreateSubRequestBody, type CreateSubResponseBody } from "./types.ts";

export default async function createNewSub(sub: CreateSubRequestBody, localPrisma?: PrismaTrnClient): Promise<CreateSubResponseBody> {
  const { package: pkg, attractorId, user, ...restSub } = sub
  const client = localPrisma ?? prisma
  const newSub = await client.sub.create({
    data: {
      ...restSub,

      package: {
        create: {
          ...pkg,
          endDate: new Date(sub.package.endDate),
          startDate: new Date(sub.package.startDate),
          paymentDate: sub.package.paymentDate && new Date(sub.package.paymentDate),


        }
      },
      user: user && {
        create: {
          ...user,
          pwd: hashSync(user.pwd, 10)
        }
      },
      sc_ae: {
        create: {
          timestamp: new Date(),
        }
      },
      ...(attractorId
        ? {
          attractedBy: {
            connect: {
              id: attractorId
            }
          }
        }
        : {}
      )

    },
    include: {
      ...CREATE_SUB_ARGS.include,
      attractedBy: {
        include: {
          attractedSubs: true,
          package: true
        }
      },
      sc_ae: true

    }

  })

  if (newSub.attractedBy) await processAttractors(newSub.attractedBy, newSub.sc_ae!, client)
  return newSub
}