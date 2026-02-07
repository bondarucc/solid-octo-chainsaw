import express from "express"
import { PartnerModel } from "../../../generated/prisma/models.ts"
import { prisma } from "../../initDB.ts"

const router = express.Router()

const PATH = "/partners"

type PartnerDTO = Omit<PartnerModel, "id">

router.get(`/sec${PATH}`, async (_, res) => {
  const result = await prisma.partner.findMany()
  res.json(result)
})

router.post(`/sec${PATH}`, async (req, res) => {
  const partnerDTO: PartnerDTO = req.body
  const result = await prisma.partner.create({
    data: partnerDTO,

  })
  res.json(result)
})

router.get(`${PATH}/:id`, async (req, res) => {

  const partner = await prisma.partner.findFirst({
    where: {
      id: parseInt(req.params.id)
    }
  })
  res.json(partner)
})

export { router as partnerRouter }
