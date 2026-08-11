import express from "express"
import { prisma } from "../../initDB.js"
import { adminMiddleware } from "../auth/adminWiddleware.js"
import { listUsers } from "./listUsers.js"
import { createUserRequestHandler } from "./createUser.js"
import { doUserRepayment } from "./userRepayment.js"
import { updateUser } from "./updateUser.js"

const router = express.Router()
const innerRouter = express.Router()
const PATH = "/users"
router.use(PATH, adminMiddleware, innerRouter)

innerRouter.get("/", listUsers)
innerRouter.post("/", createUserRequestHandler)
innerRouter.post("/:userLogin/repayment", doUserRepayment)
innerRouter.put("/:login", updateUser)

export { router as userRouter }
