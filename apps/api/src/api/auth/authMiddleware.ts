import type { Handler } from "express"
import jwt, { type JwtPayload } from "jsonwebtoken"
import "dotenv/config"
import { UnauthorizedError } from "../../errorDict.js"
import { prisma } from "../../initDB.js"
import { Prisma } from "../../../generated/prisma/client.js"


const secret = process.env["JWT_SECRET"]
if (!secret) throw "no jwt secret set up"

const locals = {
  select: {
    login: true,
    role: true,
    customMonetaryRewardAmount: true,
    createdAt: true,
    totalPayableReward: true,
    sub: true
  }
} as const

export type Locals = {
  userData: Prisma.UserGetPayload<typeof locals>
}

export const authMiddleware: Handler = async (req, res, next) => {
  
  if (req.originalUrl === "/api/auth/login") return next()
  
  const token = req.cookies.auth_token
  
  if (!token) throw new UnauthorizedError()
  
  try {
    const {userId} = jwt.verify(token, JWT_SECRET) as JwtPayload

    // const t = await prisma.user.findMany()
    
    const userData = await prisma.user.findFirstOrThrow({
      where: {
        login: userId
      },
      ...locals
    })
    
    res.locals.userData = userData    
    return next()
    
  } catch(e) {
    if (e instanceof jwt.TokenExpiredError) {
      throw new UnauthorizedError()
    } else throw e
  }
  
}
const JWT_SECRET = secret
export { JWT_SECRET }