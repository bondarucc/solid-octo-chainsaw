import express from "express"
import { prisma } from "../../initDB.js"
import { adminMiddleware } from "../auth/adminWiddleware.js"
import { extendSubPackage } from "./extendSubPackage.js"
// import updateSub from "./updateSub.js"
import { createSub } from "./createSub.js"
import { listSubs } from "./listSubs.js"
import { promoteSub } from "./promoteSub.js"
import { getMySubs } from "./getMySubs.js"
import { updateSub } from "./updateSub.js"

const router = express.Router()

const PATH = "/subs"

const innerRouter = express.Router()
const secureInnerRouter = express.Router()
router.use(PATH, innerRouter, adminMiddleware, secureInnerRouter)

secureInnerRouter.get(`/full`, listSubs)
secureInnerRouter.post("/:externalId/extend", extendSubPackage)
secureInnerRouter.post("/", createSub)
secureInnerRouter.post("/:externalId/promote", promoteSub)
secureInnerRouter.put("/:externalId", updateSub)

innerRouter.get(`/mySubs`, getMySubs)

// secureInnerRouter.get("/:id", async (req, res) => {
//   const sub = await prisma.sub.findFirst({
//     where: {
//       externalId: req.params.id
//     },
//     include: {
//       user: {
//         select: {
//           login: true,
//           role: true
//         }
//       }
//     }
//   })
//   res.json(sub)
// })

export { router as subRouter }
