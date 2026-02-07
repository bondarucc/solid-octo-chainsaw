import { Handler } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import "dotenv/config"
import { UnauthorizedError } from "../../errorDict.ts"


const secret = process.env["JWT_SECRET"]
if (!secret) throw "no jwt secret set up"

export const authMiddleware: Handler = (req, res, next) => {
  const token = req.cookies.auth_token
  
  if (!token) throw new UnauthorizedError()

  try {
    const {userId} = jwt.verify(token, JWT_SECRET) as JwtPayload
    res.locals.userId = userId
    next()
    
  } catch(e) {
    if (e instanceof jwt.TokenExpiredError) {
      throw new UnauthorizedError()
    }
  }
  
}
const JWT_SECRET = secret
export { JWT_SECRET }