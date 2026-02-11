import "dotenv/config"
import { RequestHandler } from "express"
import { ForbiddenError } from "../../errorDict.ts"
import { Role } from "../../../generated/prisma/client.js"

const ADM = process.env["ADM"]
if (!ADM) throw "no ADM set up"

export const adminMiddleware: RequestHandler = (_, res, next) => {
  const {role} = res.locals.userData
  
  if (role !== Role.ADMIN) {
    throw new ForbiddenError()
  }
  return next()
}

// export function isAdmin(id: string) {
//   return id === ADM
// }