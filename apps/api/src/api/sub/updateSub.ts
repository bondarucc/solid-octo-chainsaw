import { hashSync } from "bcrypt";
import type { Package, Prisma, Sub, User } from "../../../generated/prisma/index.js";
import { prisma } from "../../initDB.js";
import type { SubUpdateRequestBody } from "./types.js";

export default async function updateSub(id: string, inputData: SubUpdateRequestBody) {
  const oldSubData = await prisma.sub.findFirstOrThrow({
    where: {
      externalId: id
    },
    include: {
      package: true,
      user: true
    }
  })

  return await prisma.$transaction(async trn => {
    const { epg, login, m3uPlaylist, media, note, package: pkg, publicKey, pwd, reason, user, customMonetaryRewardAmount } = inputData
    const { endDate, paymentAmount, paymentCurr, paymentDate, pkgType, region, startDate } = pkg
    const newSubData = await trn.sub.update({
      where: {
        externalId: id
      },
      include: {
        package: true,
        user: true
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
        customMonetaryRewardAmount,
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
        },
        user: modifyUserData(!!oldSubData.user, user )
      }
    })

    const diff = whatHasChanged(oldSubData, newSubData)
    diff && await trn.sU_AE.create({
      data: {
        diff: JSON.stringify(diff),
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

function modifyUserData(userExists: boolean, userInputData: SubUpdateRequestBody["user"]) {
  if (userExists && userInputData) {
    return {
      update: {
        pwd: userInputData.pwd ? hashSync(userInputData.pwd, 10) : undefined,
        role: userInputData.role
      }
    }
  }
  if (!userExists && userInputData) {
    return {
      create: {
        login: userInputData.login,
        pwd: hashSync(userInputData.pwd, 10),
        role: userInputData.role
      }
    }
  }
  return undefined
}

type SubWithPkgAndUser = Prisma.SubGetPayload<{ include: { package: true, user: true } }>
type Result<T extends object> = { [K in keyof T]: T[K] extends object ? Result<T[K]> : { prevValue: T[K], newValue: T[K] } }

function isPackageKey(key: string): key is keyof Package {
  return true
}

function isSubKey(key: string): key is keyof Sub {
  return true
}

function isUserKey(key: string): key is keyof User {
  return true
}

function whatHasChanged(oldSub: SubWithPkgAndUser, newSub: SubWithPkgAndUser) {
  const {package: pkg, user, ...rest} = oldSub
  const result: any = {package: {}, user: {}}

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

  if (newSub.user) {
    for (const key in newSub.user) {
      if (isUserKey(key)) {
        if (user == null || (JSON.stringify(user[key]) !== JSON.stringify(newSub.user[key]))) {
          if (user == null) {
            result["user"][key] = {
              prevValue: null,
              newValue: key === "pwd" ? "***" : newSub.user[key]
            }
          } else {
            result["user"][key] = {
              prevValue: key === "pwd" ? "***" : user[key],
              newValue: key === "pwd" ? "***" : newSub.user[key]
            }

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

  return JSON.stringify(result) === '{"package":{},"user":{}}' ? null : result
}