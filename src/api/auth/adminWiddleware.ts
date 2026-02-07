import "dotenv/config"
import { RequestHandler } from "express"
import { ForbiddenError } from "../../errorDict.ts"

const ADM = process.env["ADM"]
if (!ADM) throw "no ADM set up"

export const adminMiddleware: RequestHandler = (_, res, next) => {
  const userId: string = res.locals.userId
  if (!userId || userId !== ADM) {
    throw new ForbiddenError()
  }
  next()
  
  
}