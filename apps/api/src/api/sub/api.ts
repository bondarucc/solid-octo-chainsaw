import express, { type Request } from "express"
import { prisma } from "../../initDB.ts"
import createNewSub from "./createNewSub.ts"
import { GET_SUBS_ARGS, type GetSubAuditEventsResponseBody, type GetSubsListResponseBody } from "./types.ts"
import { sortAuditEventsByTimestamp } from "./helpers.ts"
import { extendSubPackage } from "./extendSubPackage.ts"

const router = express.Router()

const PATH = "/subs"

// Get all subs
router.get(`/sec${PATH}`, async (req: Request<{}, {}, {}, { externalId: string, attractorId: string, login: string }>, res) => {
  const { externalId, attractorId, login } = req.query

  const result: GetSubsListResponseBody = await prisma.sub.findMany({
    ...GET_SUBS_ARGS,
    where: {
      externalId: externalId ? externalId : undefined,
      attractedBy: attractorId ? {
        externalId: attractorId
      } : undefined,
      user: login ? {
        login
      } : undefined
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
router.post(`/sec${PATH}`, async (req, res) => {
  const newSub = await createNewSub(req.body)
  res.json(newSub)
})

// Get sub audit events
router.get(`/sec${PATH}/:id/audit`, async (req: Request<{ id: string }>, res) => {
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

  // const sssai = (await prisma.sSSAI_AE.findMany({
  //   where: {
  //     subId
  //   },
  //   include: { sc_ae: { include: { sub: { include: { attractedBy: true } } } } }
  // })).map(sssaiEvent => ({ type: "SSSAI" as const, ...sssaiEvent }))

  const result: GetSubAuditEventsResponseBody = sortAuditEventsByTimestamp([sc, ...spe, ...srt])

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

router.get(`/sec${PATH}/:id/extend`, async (req: Request<{ id: string }>, res) => {
  const subId = req.params.id
  await extendSubPackage(subId)
  res.json({})
})

router.get(`${PATH}/:id`, async (req, res) => {
  const sub = await prisma.sub.findFirst({
    where: {
      id: req.params.id
    }
  })
  res.json(sub)
})

//Get my subs
router.get(`${PATH}`, async (req, res) => {
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

export { router as subRouter }