import "dotenv/config" //??
import { RequestHandler } from "express"
import { ForbiddenError } from "../../errorDict.js"
import { Role } from "../../../generated/prisma/client.js"

export const adminMiddleware: RequestHandler = (_, res, next) => {
  const {role} = res.locals.userData

  if (role !== Role.ADMIN) {
    throw new ForbiddenError()
  }
  return next()
}