import { compare, hashSync} from "bcrypt"
import express from "express"
import jwt from "jsonwebtoken"
import { prisma } from "../../initDB.js"
import { JWT_SECRET } from "./authMiddleware.js"

import { UnauthorizedError } from "../../errorDict.js"
// import { isAdmin } from "./adminWiddleware.ts"

const router = express.Router()

const PATH = "/auth"

// console.log(hashSync("some_pwd", 10));
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
  res.redirect(`${PATH}/me`)
})

router.post(`${PATH}/logout`, (_, res) => {
  res.clearCookie('auth_token')
  res.json()
})

router.get(`${PATH}/me`, async (_, res) => {
  res.json({
    ...res.locals.userData,
    // isAdm: isAdmin(res.locals.userId)
  })
}) 

export { router as authRouter }
