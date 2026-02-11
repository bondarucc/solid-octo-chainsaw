import { compare } from "bcrypt"
import express from "express"
import jwt from "jsonwebtoken"
import { prisma } from "../../initDB.ts"
import { JWT_SECRET } from "./authMiddleware.ts"

import { UnauthorizedError } from "../../errorDict.ts"
// import { isAdmin } from "./adminWiddleware.ts"

const router = express.Router()

const PATH = "/auth"

router.post(`${PATH}/login`, async (req, res) => {
  const { login, pwd } = req.body
  const user = await prisma.user.findFirst({
    where: {
      login
    }
  })
  if (!user || !await compare(pwd, user.pwd)) {
    throw new UnauthorizedError()
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' })

  res.cookie('auth_token', token, {
    httpOnly: true,
    secure: false, // TODO
    sameSite: 'strict'
  })

  res.json({
    userId: user.id,
    role: user.role
  })


})

// router.get(`${PATH}/me`, async (_, res) => {
//   res.json({
//     ...res.locals,
//     isAdm: isAdmin(res.locals.userId)
//   })
// }) 

export { router as authRouter }
