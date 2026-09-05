import type { RequestHandler } from "express"
import type { Sub } from "../../../generated/prisma/index.js"
import type { Locals } from "../auth/authMiddleware.js"
import { prisma } from "../../initDB.js"

const MODIFIABLE_KEYS = Array.from(new Set(["endDate", "epg", "login", "m3uPlaylist", "media", "note", "publicKey", "pwd", ] as const satisfies Array<keyof Sub>))
const ITERABLE_KEYS = Array.from(new Set(["epg", "login", "m3uPlaylist", "media", "note", "publicKey", "pwd", ] as const satisfies Array<keyof Sub>))

export type UpdateSubRequestBody = Pick<Sub, typeof MODIFIABLE_KEYS[number]>
export type UpdateSubResponseBody = Sub

export const updateSub: RequestHandler<{ externalId: Sub["externalId"] }, UpdateSubResponseBody, UpdateSubRequestBody, null, Locals> = async function (req, res) {
  const { externalId } = req.params
  const {  } = req.body
  const { userData: { login: actor } } = res.locals

  const updatedSub = await prisma.$transaction(async trn => {


    const prevData = await trn.sub.findFirstOrThrow({ where: { externalId } })
    const updatedData = await trn.sub.update({
      where: { externalId },
      data: Object.fromEntries(MODIFIABLE_KEYS.map(k => [k, req.body[k]]))
    })

    const diff = JSON.stringify(generateDiff(prevData, updatedData))

    console.log(diff);
    
    if (diff !== "{}") {
      await trn.entityUpdatedAuditEvent.create({
        data: {
          createdAt: new Date(),
          entityId: externalId,
          entityType: "SUB",
          diff,
          createdByUserId: actor
        }
      })
    }

    return updatedData
  })
  return res.json(updatedSub)
}

export type SubDiffShape = Partial<{
  [K in keyof UpdateSubRequestBody]: {
    prevValue: UpdateSubRequestBody[K],
    newValue: UpdateSubRequestBody[K],
  }
}>

function generateDiff(prevData: Sub, newData: Sub): SubDiffShape {

  const initialReduceValue: SubDiffShape = {
    endDate: prevData.endDate > newData.endDate || prevData.endDate < newData.endDate
      ? {
        prevValue: prevData.endDate,
        newValue: newData.endDate
      }
      : undefined
  }

  const diff = Array.from(ITERABLE_KEYS).reduce((acc: SubDiffShape, key) => {
    return {
      ...acc,
      [key]: prevData[key] !== newData[key]
        ? {
          prevValue: prevData[key],
          newValue: newData[key],
        }
        : undefined
    }
  }, initialReduceValue)

  return diff
}