import express from "express"
import { User } from "../../../generated/prisma/client.ts"
import { prisma } from "../../initDB.ts"
import { hashSync } from "bcrypt"

const router = express.Router()

const PATH = "/users"

// type PartnerDTO = Omit<PartnerModel, "id">

router.get(`/sec${PATH}`, async (_, res) => {
  const result = await prisma.user.findMany()
  res.json(result)
})

router.post(`/sec${PATH}`, async (req, res) => {
  const user = req.body
  const result = await prisma.user.create({
    data: {
      ...user,
      pwd: hashSync(user.pwd, 10)
    }

  })
  res.json(result)
})

router.get(`${PATH}/:id`, async (req, res) => {

  const partner = await prisma.user.findFirst({
    where: {
      id: req.params.id
    }
  })
  res.json(partner)
})

export { router as userRouter }
