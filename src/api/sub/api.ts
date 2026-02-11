import express from "express"
import { Sub, Package, PaymentDetails } from "../../../generated/prisma/client.ts"
import { prisma } from "../../initDB.ts"
import processAttractors from "./processAttractors.ts"
import createNewSub from "./createNewSub.ts"

const router = express.Router()

const PATH = "/subs"

// type AbonentDTO = Omit<AbonentModel, "id"> & {
//   package: Omit<PackageModel, "id" | "abonentId"> & {
//     paymentDetails: Omit<PaymentDetailsModel, "id" | "packageId">
//   }
// }

router.get(`${PATH}`, async (req, res) => {
  const result = await prisma.sub.findMany()
  res.json(result)
})

router.post(`/sec${PATH}`, async (req, res)  => {
  const newSub = await createNewSub(req.body)

  res.json(newSub)
})

router.get(`${PATH}/:id`, async (req, res) => {
  const sub = await prisma.sub.findFirst({where: {
    id: req.params.id
  }})
  res.json(sub)
})

export {router as subRouter}