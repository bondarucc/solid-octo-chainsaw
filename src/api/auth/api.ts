import { compare } from "bcrypt"
import jwt from "jsonwebtoken"
import { prisma } from "../../initDB.ts"
import { JWT_SECRET } from "./authMiddleware.ts"
import { Handler } from "express"


const PATH = "/auth"

export const loginHandler: [string, Handler] = [`${PATH}/login`, async (req, res) => {
  const {login, pwd} = req.body
  const partner = await prisma.partner.findFirst({where: {
    login
  }})
  if (!partner) {
    throw "wrong login or pwd"
  }

  const isValid = await compare(pwd, partner.pwd)
  if (!isValid) {
    throw "wrong login or pwd"
  }

  const token = jwt.sign({userId: partner.login}, JWT_SECRET, {expiresIn: '1h'})
  
  res.cookie('auth_token', token, {
    httpOnly: true,
    secure: false, // TODO
    sameSite: 'strict'
  }) 

  res.json()


}]

// export {handler}



// app.post(`${PATH}/login`, async (req, res) => {
//   const {login, pwd} = req.body
//   const partner = await prisma.partner.findFirst({where: {
//     login
//   }})
//   if (!partner) {
//     throw "wrong login or pwd"
//   }

//   const isValid = await compare(pwd, partner.pwd)
//   if (!isValid) {
//     throw "wrong login or pwd"
//   }

//   const token = jwt.sign({userId: partner.login}, JWT_SECRET, {expiresIn: '1h'})
  
//   res.cookie('auth_token', token, {
//     httpOnly: true,
//     secure: false, // TODO
//     sameSite: 'strict'
//   })

//   res.json()


// })

