import express from "express"
import { adminMiddleware } from "../auth/adminWiddleware.js"
import generateReportHandler from "./getReport.js"
import { getActivityJournal } from "./getActivityJournal.js"

const router = express.Router()
const innerRouter = express.Router()

const PATH = "/report"


router.use(PATH, adminMiddleware, innerRouter)

innerRouter.get(
  "/generate",
  ...generateReportHandler
)

// innerRouter.get(
//   "/audit",
//   getAudit
// )

innerRouter.get(
  "/journal",
  getActivityJournal
)

export { router as reportRouter }
