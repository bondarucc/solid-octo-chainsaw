import express, { type Request } from "express"
import { normaliseSearchQuery } from "../../helpers.js"
import { prisma } from "../../initDB.js"
import { adminMiddleware } from "../auth/adminWiddleware.js"
import createNewSub from "./createNewSub.js"
import { extendSubPackage } from "./extendSubPackage.js"
import { sortAuditEventsByTimestamp } from "./helpers.js"
import { GET_SUBS_ARGS, type GetSubAuditEventsResponseBody, type GetSubsListResponseBody } from "./types.js"
import updateSub from "./updateSub.js"

const router = express.Router()

const PATH = "/subs"

const innerRouter = express.Router()
const secureInnerRouter = express.Router()

router.use(PATH, innerRouter)
router.use(PATH, adminMiddleware, secureInnerRouter)


// Get all subs
secureInnerRouter.get(`/full`, async (req: Request<{}, {}, {}, { externalId: string, attractorId: string, login: string }>, res) => {
  const { externalId, attractorId, login } = normaliseSearchQuery(req.query)

  const result: GetSubsListResponseBody = await prisma.sub.findMany({
    ...GET_SUBS_ARGS,
    where: {
      externalId: externalId && {
        contains: externalId
      },
      attractedBy: {
        externalId: attractorId && {
          contains: attractorId
        }
      },
      user: {
        login: login && {
          contains: login
        }
      }
    }
  })
  res.json(result)
})

//Get subs assignable to a user
secureInnerRouter.get(`/assignable`, async (_, res) => {
  const assignableSubs = await prisma.sub.findMany({
    where: {
      user: null
    }
  })
  res.json(assignableSubs)
})

// Create new Sub
secureInnerRouter.post("/", async (req, res) => {
  const newSub = await createNewSub(req.body)
  res.json(newSub)
})

// Get sub audit events
secureInnerRouter.get("/:id/audit", async (req: Request<{ id: string }>, res) => {
  const subId = req.params.id

  const sc = {
    ...await prisma.sC_AE.findFirstOrThrow({
      where: {
        subId
      },
      include: {
        sub: {
          include: {
            package: true
          }
        }
      }
    }),
    type: "SC" as const
  }

  const spe = (await prisma.sPE_AE.findMany({
    where: {
      pkgId: sc.sub.package?.id
    },
    include: { sc_ae: { include: { sub: true } } }
  })).map(speEvent => ({ type: "SPE" as const, ...speEvent }))

  const srt = (await prisma.sRT_AE.findMany({
    where: {
      subId,
    },
    include: { sc_ae: { include: { sub: true } } }
  })).map(srtEvent => ({ type: "SRT" as const, ...srtEvent }))

  const sr = (await prisma.sR_AE.findMany({
    where: {
      subId
    }
  })).map(srEvent => ({ type: "SR" as const, ...srEvent }))

  const su = (await prisma.sU_AE.findMany({
    where: {
      subId
    }
  })).map(suEvent => ({ type: "SU" as const, ...suEvent }))

  // const sssai = (await prisma.sSSAI_AE.findMany({
  //   where: {
  //     subId
  //   },
  //   include: { sc_ae: { include: { sub: { include: { attractedBy: true } } } } }
  // })).map(sssaiEvent => ({ type: "SSSAI" as const, ...sssaiEvent }))

  const result: GetSubAuditEventsResponseBody = sortAuditEventsByTimestamp([sc, ...su, ...spe, ...srt, ...sr])

  // const result: GetSubAuditEventsResponseBody = {
  //   sc,
  //   spe: await prisma.sPE_AE.findMany({
  //     where: {
  //       pkgId: sc.sub.package?.id
  //     },
  //     include: {sc_ae: {include: {sub: true}}}
  //   }),
  //   srt: await prisma.sRT_AE.findMany({
  //     where: {
  //       subId,

  //     },
  //     include: {sc_ae: {include: {sub: true}}}
  //   }),
  //   sssai_ae: await prisma.sSSAI_AE.findMany({
  //     where: {
  //       subId
  //     },
  //     include: {sc_ae: {include: {sub: {include: {attractedBy: true}}}}}
  //   })
  // }

  res.json(result)

})

secureInnerRouter.get("/:id/extend", async (req, res) => {
  const subId = req.params.id
  await extendSubPackage(subId)
  res.json({})
})

secureInnerRouter.get("/:id", async (req, res) => {
  const sub = await prisma.sub.findFirst({
    where: {
      externalId: req.params.id
    },
    include: {
      package: true,
      user: {
        select: {
          login: true,
          role: true
        }
      }
    }
  })
  res.json(sub)
})

//Get my subs
innerRouter.get(`/mySubs`, async (req, res) => {
  const { id } = res.locals.userData.sub
  // console.log(externalId);

  const directSubs = await prisma.sub.findFirstOrThrow({
    select: {
      attractedSubs: {
        select: {
          externalId: true,
          login: true,
          pwd: true,
          epg: true,
          m3uPlaylist: true,
          media: true,
          publicKey: true,
          package: {
            select: {
              endDate: true,
            }
          }
        }
      }
    },
    where: {
      id
    }
  })

  res.json(directSubs.attractedSubs)
})

secureInnerRouter.post(`/:id/repayment`, async (req, res) => {
  const subId = req.params.id
  const {repaymentAmount} = req.body

  const {totalPayableReward: currentTotalPayableReward} = await prisma.sub.findFirstOrThrow({
    where: {
      id: subId
    }
  })

  await prisma.sub.update(
    {
      data: {
        totalPayableReward: {
          decrement: repaymentAmount
        },
        sr_ae: {
          create: {
            timestamp: new Date(),
            repaymentAmount: repaymentAmount,
            newTotalPayableReward: currentTotalPayableReward - repaymentAmount,
            prevTotalPayableReward: currentTotalPayableReward
          }
        }
      },
      where: {
        id: subId
      }
    }
  )

  res.json("ok")
})

// update sub
secureInnerRouter.post("/:id", async (req, res) => {
  
  res.json(await updateSub(req.params.id, req.body))
})

secureInnerRouter.post("/:id/userAssign", async (req, res) => {
  const {login, pwd, role} = req.body
  await prisma.sub.update({
    where: {
      externalId: req.params.id
    },
    data: {
      user: {
        create: {
          login,
          pwd,
          role
        }
      }
    }
  })

  res.json("ok")

})

export { router as subRouter }
