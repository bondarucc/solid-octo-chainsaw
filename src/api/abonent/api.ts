import express from "express"
import { AbonentModel, PackageModel, PaymentDetailsModel } from "../../../generated/prisma/models.ts"
import { prisma } from "../../initDB.ts"

const router = express.Router()

const PATH = "/abonents"

type AbonentDTO = Omit<AbonentModel, "id"> & {
  package: Omit<PackageModel, "id" | "abonentId"> & {
    paymentDetails: Omit<PaymentDetailsModel, "id" | "packageId">
  }
}

router.get(`${PATH}/list`, async (req, res) => {
  const result = await prisma.abonent.findMany()
  res.json(result)
})

router.post(PATH, async (req, res)  => {
  const abonent: AbonentDTO = req.body
  const result = await prisma.abonent.create({
    data: {
      ...abonent,
      package: {
        create: {
          ...abonent.package,
          endDate: new Date(abonent.package.endDate),
          startDate: new Date(abonent.package.startDate),
          paymentDetails: {
            create: {
              ...abonent.package.paymentDetails,
              paymentDate: new Date(abonent.package.paymentDetails.paymentDate)
            }
          }
        }
      },
    }
  })
  res.json(result)
})

router.get(`${PATH}/:id`, async (req, res) => {
  const abonent = await prisma.abonent.findFirst({where: {
    id: parseInt(req.params.id)
  }})
  res.json(abonent)
})

export {router as abonentRouter}