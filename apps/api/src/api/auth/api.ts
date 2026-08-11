import { compare } from "bcrypt"
import express from "express"
import jwt from "jsonwebtoken"
import { prisma } from "../../initDB.js"
import { JWT_SECRET } from "./authMiddleware.js"

import { UnauthorizedError } from "../../errorDict.js"

const router = express.Router()
const innerRouter = express.Router()

const PATH = "/auth"
router.use(PATH, innerRouter)

innerRouter.post(`/login`, async (req, res) => {
  const { login, pwd } = req.body
  const user = await prisma.user.findFirst({
    where: {
      login
    }
  })
  if (!user || !await compare(pwd, user.pwd)) {
    throw new UnauthorizedError()
  }

  const token = jwt.sign({ userId: user.login }, JWT_SECRET, { expiresIn: '6h' })

  res.cookie('auth_token', token, {
    httpOnly: true,
    secure: false, // TODO
    sameSite: 'strict'
  })
  res.redirect(`${req.baseUrl}/me`)
})

innerRouter.post(`/logout`, (_, res) => {
  res.clearCookie('auth_token')
  res.json("ok")
})

innerRouter.get(`/me`, async (_, res) => {
  res.json({
    ...res.locals.userData,
  })
}) 

export { router as authRouter }
