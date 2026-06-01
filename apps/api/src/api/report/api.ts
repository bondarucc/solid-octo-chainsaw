import express, { RequestHandler, type Request } from "express"
import { adminMiddleware } from "../auth/adminWiddleware.js"
import { type Report } from "./types.js"
import { prisma } from "../../initDB.js"
import dayjs from "dayjs"


const router = express.Router()
const innerRouter = express.Router()

const PATH = "/report"

router.use(PATH, adminMiddleware, innerRouter)

type RH = RequestHandler<null, Report["Create"]["Response"], null, Report["Create"]["Request"]["Query"], Locals>
type Locals = {
  dateFrom: Date
  dateTo: Date,
  report: Partial<Report["Create"]["Response"]>
}

const validateInputPopulateLocals: RH = async function (req, res, next) {
  const { from, to } = req.query
  if (!from || !to) throw "invalid report input"

  const [dateFrom, dateTo] = [new Date(from), dayjs(to).endOf("d").toDate()]

  res.locals = { dateFrom, dateTo, report: {} }

  next()

}

const calculateFreeExtensions: RH = async (_, res, next) => {
  const { dateFrom, dateTo, report } = res.locals
  const freeExtensions = await prisma.sPE_AE.count({
    where: {
      sc_ae: {
        isNot: null
      },
      timestamp: {
        lte: dateTo,
        gte: dateFrom
      }
    }
  })
  report.freeExtensions = freeExtensions
  next()
}

const calculatePaidExtensions: RH = async (_, res, next) => {
  const { dateFrom, dateTo, report } = res.locals

  const paidExtensions = await prisma.sPE_AE.count({
    where: {
      sc_ae_id: null,
      timestamp: {
        lte: dateTo,
        gte: dateFrom
      }
    }
  })

  report.paidExtensions = paidExtensions

  next()

}

const calculateNewSubs: RH = async (_, res, next) => {
  const { dateFrom, dateTo, report } = res.locals

  const newSubs = await prisma.sC_AE.count({
    where: {
      timestamp: {
        lte: dateTo,
        gte: dateFrom
      }
    }
  })

  report.newSubs = newSubs

  next()

}

const calculateTotalExpenses: RH = async (_, res, next) => {
  const { dateFrom, dateTo, report } = res.locals
  

}

innerRouter.get(
  "/generate",
  validateInputPopulateLocals,
  calculateFreeExtensions,
  calculatePaidExtensions,
  calculateNewSubs,
  function finalizeReport(_, res) {

    const { report } = res.locals

    res.json(report as Report["Create"]["Response"])

  }
)

export { router as reportRouter }