import { Handler } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import "dotenv/config"
import { UnauthorizedError } from "../../errorDict.js"
import { prisma } from "../../initDB.js"


const secret = process.env["JWT_SECRET"]
if (!secret) throw "no jwt secret set up"



export const authMiddleware: Handler = async (req, res, next) => {
  
  if (req.originalUrl === "/api/auth/login") return next()
  
  const token = req.cookies.auth_token
  
  if (!token) throw new UnauthorizedError()
  
  try {
    const {userId} = jwt.verify(token, JWT_SECRET) as JwtPayload

    // const t = await prisma.user.findMany()
    
    const userData = await prisma.user.findFirstOrThrow({
      where: {
        id: userId
      },
      select: {
        login: true,
        role: true,
        id: true,
        sub: true
      },

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