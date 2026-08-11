import { RequestHandler } from "express"
import { prisma } from "../../initDB.js"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat.js"
import { InvalidReportInput } from "../../errorDict.js"

dayjs.extend(customParseFormat);

export type GenerateReportResponseBody = {
  dateRange: {
    from: string,
    to: string
  },
  data: {
    totalIncome: number
    totalExpenses: number
    repayments: {
      count: number
      cost: number
    },
    newSubs: {
      total: number,
      attractedBySmbdTotal: number,
      cost: number
    }
    paidExtensions: {
      count: number,
      cost: number
    },
    freeExtensions: {
      count: number,
      cost: number
    }
  }
}

export type GenerateReportQuery = {
  from: string,
  to: string
}

type RH = RequestHandler<null, GenerateReportResponseBody, null, GenerateReportQuery, Locals>

type Locals = {
  dateFrom: Date
  dateTo: Date,
  report: Partial<GenerateReportResponseBody["data"]>
}

const ANNUAL_COST = 40
const HALF_ANNUAL_COST = ANNUAL_COST / 2

const validateInputPopulateLocals: RH = async function (req, res, next) {
  const { from, to } = req.query

  const [dateFrom, dateTo] = [dayjs(from, "YYYY-MM-DD", true).startOf("d").toDate(), dayjs(to, "YYYY-MM-DD", true).endOf("d").toDate()]

  if ([dateFrom.toString(), dateTo.toString()].some(v => v === "Invalid Date")) {
    throw new InvalidReportInput()
  }

  res.locals = {
    dateFrom,
    dateTo,
    report: {}
  }

  next()

}

const calculateFreeExtensions: RH = async (_, res, next) => {
  const { dateFrom, dateTo, report } = res.locals
  const freeExtensions = await prisma.subPackageExtendedAuditEvent.count({
    where: {
      reason: "NEW_SUB_ATTRACTED",
      createdAt: {
        gte: dateFrom,
        lte: dateTo
      }
    }
  })
  report.freeExtensions = {
    count: freeExtensions,
    cost: freeExtensions * HALF_ANNUAL_COST
  }
  next()
}

const calculatePaidExtensions: RH = async (_, res, next) => {
  const { dateFrom, dateTo, report } = res.locals

  const paidExtensions = await prisma.subPackageExtendedAuditEvent.count({
    where: {
      reason: "PAID_EXTENSION",
      createdAt: {
        gte: dateFrom,
        lte: dateTo
      }
    }
  })

  report.paidExtensions = {
    count: paidExtensions,
    cost: paidExtensions * ANNUAL_COST
  }

  next()

}

const calculateNewSubs: RH = async (_, res, next) => {
  const { dateFrom, dateTo, report } = res.locals

  const newSubs = await prisma.sub.findMany({
    select: {
      referalDetails: true
    },
    where: {
      startDate: {
        lte: dateTo,
        gte: dateFrom
      }
    }
  })

  report.newSubs = {
    total: newSubs.length,
    attractedBySmbdTotal: newSubs.filter(sub => sub.referalDetails).length,
    cost: newSubs.length * ANNUAL_COST
  }

  next()

}

const calculateRepayments: RH = async (_, res, next) => {
  const { dateFrom, dateTo, report } = res.locals

  const allRepayments = await prisma.userRepaymentAuditEvent.findMany({
    where: {
      createdAt: {
        lte: dateTo,
        gte: dateFrom
      }
    }
  })

  const totalCost = allRepayments.reduce((acc, { repaymentAmount }) => {
    return acc + repaymentAmount
  }, 0)

  report.repayments = {
    count: allRepayments.length,
    cost: totalCost
  }

  next()
}

const calculateTotalExpenses: RH = async (_, res, next) => {
  const { dateFrom, dateTo, report } = res.locals

  if (
    !report.freeExtensions ||
    !report.paidExtensions ||
    !report.newSubs ||
    !report.repayments
  ) throw "wrong report generation flow"



  report.totalExpenses = report.freeExtensions.cost + report.paidExtensions.cost + report.newSubs.cost + report.repayments.cost

  next()
}

const calculateTotalIncome: RH = async (_, res, next) => {
  const { dateFrom, dateTo, report } = res.locals

  const allPayments = await prisma.payment.findMany({
    where: {
      createdAt: {
        lte: dateTo,
        gte: dateFrom
      }
    }
  })

  report.totalIncome = allPayments.reduce((acc, { amount }) => {
    return acc + amount
  }, 0)

  next()
}

const finalizeReport: RH = async (req, res) => {
  const { from, to } = req.query

  const { report } = res.locals

  res.json({
    dateRange: { from, to },
    data: report as GenerateReportResponseBody["data"]
  })

}

export default [
  validateInputPopulateLocals,
  calculateFreeExtensions,
  calculatePaidExtensions,
  calculateNewSubs,
  calculateRepayments,
  calculateTotalExpenses,
  calculateTotalIncome,
  finalizeReport
]