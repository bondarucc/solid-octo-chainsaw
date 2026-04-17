import { Package, Prisma, Sub } from "../../../generated/prisma/index.js";
import { prisma } from "../../initDB.js";
import { SubUpdateRequestBody } from "./types.js";

export default async function updateSub(id: string, inputData: SubUpdateRequestBody) {
  const oldSubData = await prisma.sub.findFirstOrThrow({
    where: {
      externalId: id
    },
    include: {
      package: true
    }
  })

  return await prisma.$transaction(async trn => {
    const { epg, login, m3uPlaylist, media, note, package: pkg, publicKey, pwd, reason } = inputData
    const { endDate, paymentAmount, paymentCurr, paymentDate, pkgType, region, startDate } = pkg
    const newSubData = await trn.sub.update({
      where: {
        externalId: id
      },
      include: {
        package: true
      },
      data: {
        // ...inputData // it is better to avoid spread operator in this case
        epg,
        login,
        pwd,
        m3uPlaylist,
        media,
        note,
        publicKey,
        package: {
          update: {
            paymentAmount,
            paymentCurr,
            paymentDate: paymentDate ? new Date(paymentDate) : paymentDate,
            pkgType,
            region,
            startDate: new Date(startDate),
            endDate: new Date(endDate)
          }
        }
      }
    })

    await trn.sU_AE.create({
      data: {
        diff: JSON.stringify(whatHasChanged(oldSubData, newSubData)),
        timestamp: new Date(),
        reason,
        sub: {
          connect: {
            id: newSubData.id
          }
        }
      }
    })
    

    return newSubData
  })

}

type SubWithPkg = Prisma.SubGetPayload<{ include: { package: true } }>
type Result<T extends object> = { [K in keyof T]: T[K] extends object ? Result<T[K]> : { prevValue: T[K], newValue: T[K] } }

function isPackageKey(key: string): key is keyof Package {
  return true
}

function isSubKey(key: string): key is keyof Sub {
  return true
}

function whatHasChanged(oldSub: SubWithPkg, newSub: SubWithPkg) {
  const {package: pkg, ...rest} = oldSub
  const result: any = {package: {}}

  if (newSub.package && pkg) {
    for (const key in pkg) {
      if (isPackageKey(key)) {
        if (JSON.stringify(pkg[key]) !== JSON.stringify(newSub.package[key])) {
          result["package"][key] = {
            prevValue: pkg[key],
            newValue: newSub.package[key]
          }
        }
      }
    }
  }

  for (const key in rest) {
    if (isSubKey(key)) {
      if (rest[key] !== newSub[key]) {
        result[key] = {
          prevValue: rest[key],
          newValue: newSub[key]
        }
      }
    }
  }

  return result



}