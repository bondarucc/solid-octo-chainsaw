import { RequestHandler, Response, Request } from "express";
import { Prisma, Sub, User } from "../../../generated/prisma/client.js";
import { prisma } from "../../initDB.js";

export type ListSubsResponseBody = Array<Prisma.SubGetPayload<{select: typeof dataToBeReturned}>>

const dataToBeReturned = {
  externalId: true,
  login: true,
  pwd: true,
  m3uPlaylist: true,
  epg: true,
  createdAt: true,
  media: true,
  pkgType: true,
  publicKey: true,
  startDate: true,
  region: true,
  endDate: true,
  note: true,
  user: {
    select: {
      login: true
    }
  },
  referalDetails: {
    select: {
      attractorUserId: true
    }
  }

} as const satisfies Prisma.SubSelect

export type FilterSubsList = {
  externalId?: Sub["externalId"],
  attractorUser?: User["login"],
  pkgStatus?: "ACTIVE" | "EXPIRED"
}

export const listSubs: RequestHandler = async (req: Request<{}, ListSubsResponseBody, {}, FilterSubsList>, res: Response<ListSubsResponseBody>) => {
  const {externalId, attractorUser, pkgStatus} = req.query
  
  const subs = await prisma.sub.findMany({
    where: {
      externalId: externalId ? externalId : undefined,
      referalDetails: attractorUser ? {
        attractorUserId: attractorUser
      } : undefined,
      endDate: pkgStatusFilterToPrismaInput(pkgStatus)
    },
    select: dataToBeReturned,

  })

  res.json(subs)
}

function pkgStatusFilterToPrismaInput(status: FilterSubsList["pkgStatus"]): Prisma.SubWhereInput["endDate"] {
  if (status == "ACTIVE") {
    return {
      gte: new Date()
    }
  }
  if (status == "EXPIRED") {
    return {
      lt: new Date()
    }
  }
}