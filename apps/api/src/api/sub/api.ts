import express, { type Request} from "express"
import { prisma } from "../../initDB.ts"
import createNewSub from "./createNewSub.ts"
import { GET_SUBS_ARGS, type GetSubsListResponseBody} from "./types.ts"

const router = express.Router()

const PATH = "/subs"

// Get all subs
router.get(`/sec${PATH}`, async (req: Request<{}, {}, {}, {externalId: string}>, res) => {
  const {externalId} = req.query
  
  const result: GetSubsListResponseBody = await prisma.sub.findMany({
    ...GET_SUBS_ARGS,
    where: {
      externalId: externalId ? externalId : undefined
    }
  })
  res.json(result)
})

//Get subs assignable to a user
router.get(`/sec${PATH}/assignable`, async (_, res) => {
  const assignableSubs = await prisma.sub.findMany({
    where: {
      user: null
    }
  })
  res.json(assignableSubs)
})

// Create new Sub
router.post(`/sec${PATH}`, async (req, res)  => {
  const newSub = await createNewSub(req.body)

  res.json(newSub)
})

router.post(`/sec${PATH}/:id/extend`, async (req, res)  => {
  res.json({})
})

router.get(`${PATH}/:id`, async (req, res) => {
  const sub = await prisma.sub.findFirst({where: {
    id: req.params.id
  }})
  res.json(sub)
})

export {router as subRouter}