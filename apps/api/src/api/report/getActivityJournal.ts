import type { RequestHandler } from "express";
import { prisma } from "../../initDB.js";
import { Prisma, type Sub, type User } from "../../../generated/prisma/index.js";
import { sortAuditEventsByTimestamp } from "./helpers.js";
import dayjs from "dayjs";

const JournalEntryTypeToResponseBodyMapping = {
  USER_CREATED: {
    select: {
      login: true,
      createdAt: true,
      createdByUserId: true,
    } satisfies Prisma.UserSelect
  },
  SUB_CREATED: {
    select: {
      externalId: true,
      createdAt: true,
      createdByUserId: true,
      referalDetails: {
        select: {
          attractorUserId: true,
          spe_ae: true,
          urt_ae: {
            where: {
              rewardType: "NEW_SUB"
            }
          }
        }
      }
    },
  },
  REPAYMENT_TRIGGERED: {
    select: {
      createdByUserId: true,
      userId: true,
      createdAt: true,
      repaymentAmount: true
    } satisfies Prisma.UserRepaymentAuditEventSelect
  },
  DETAILS_UPDATED: {
    select: {
      createdAt: true,
      createdByUserId: true,
      diff: true,
      entityId: true,
      entityType: true
    } satisfies Prisma.EntityUpdatedAuditEventSelect
  },
  PAID_EXTENSION: {
    select: {
      createdAt: true,
      createdByUserId: true,
      subExternalId: true,
      urt_ae: {
        select: {
          rewardAmount: true,
          referalDetails: {
            select: {
              attractorUserId: true
            }
          }
        }
      },
    } satisfies Prisma.SubPackageExtendedAuditEventSelect
  }
} as const satisfies { [k in JournalEventTypes]: object }

export type GetActivityJournalResponseBody = {
  data: Array<
    {
      type: "USER_CREATED",
      data: Prisma.UserGetPayload<typeof JournalEntryTypeToResponseBodyMapping.USER_CREATED>
    } |
    {
      type: "SUB_CREATED",
      data: Prisma.SubGetPayload<typeof JournalEntryTypeToResponseBodyMapping.SUB_CREATED>
    } |
    {
      type: "REPAYMENT_TRIGGERED",
      data: Prisma.UserRepaymentAuditEventGetPayload<typeof JournalEntryTypeToResponseBodyMapping.REPAYMENT_TRIGGERED>
    } | {
      type: "PAID_EXTENSION",
      data: Prisma.SubPackageExtendedAuditEventGetPayload<typeof JournalEntryTypeToResponseBodyMapping.PAID_EXTENSION>
    } | {
      type: "DETAILS_UPDATED",
      data: Prisma.EntityUpdatedAuditEventGetPayload<typeof JournalEntryTypeToResponseBodyMapping.DETAILS_UPDATED>
    }
  >,
  subExternalId?: Sub["externalId"],
  userLogin?: User["login"]
}

export type JournalEventTypes = GetActivityJournalResponseBody["data"][number]["type"]

export type GetActivityJournalQuery = {
  from?: string
  to?: string
  objectBy?: Extract<keyof Sub, "externalId"> | Extract<keyof User, "login">
  objectId?: User["login"] | Sub["externalId"]
}

const DATE_FORMAT = "YYYY-MM-DD"

export const getActivityJournal: RequestHandler<null, GetActivityJournalResponseBody, null, GetActivityJournalQuery> = async (req, res) => {
  const { from, to, objectBy, objectId } = {
    ...req.query,
    from: req.query.from && dayjs(req.query.from, DATE_FORMAT).startOf("D").toDate(),
    to: req.query.to && dayjs(req.query.to, DATE_FORMAT).endOf("D").toDate()
  }

  const { subExternalId, userLogin } = await resolveObjectCredentials(objectBy, objectId)

  const usersCreated = subExternalId && !userLogin
    ? []
    : (await prisma.user.findMany({
      where: {
        createdAt: from && to
          ? {
            gte: from,
            lte: to
          } : undefined,
        login: userLogin

      },
      ...JournalEntryTypeToResponseBodyMapping.USER_CREATED
    })).map(user => ({ data: user, type: "USER_CREATED" as const }))

  const subsCreated = (await prisma.sub.findMany({
    where: {
      createdAt: from && to
        ? {
          gte: from,
          lte: to
        } : undefined,
      ...(
        subExternalId || userLogin
          ? {
            OR: [
              {
                externalId: subExternalId
              },
              {
                referalDetails: {
                  attractorUserId: userLogin
                }
              }
            ]
          }
          : {}
      ),

    },
    ...JournalEntryTypeToResponseBodyMapping.SUB_CREATED
  })).map(sub => ({ data: sub, type: "SUB_CREATED" as const }))

  const repaymentsTriggered = subExternalId && !userLogin
    ? []
    : (await prisma.userRepaymentAuditEvent.findMany({
      where: {
        createdAt: from && to
          ? {
            gte: from,
            lte: to
          } : undefined,
        userId: userLogin
      },
      ...JournalEntryTypeToResponseBodyMapping.REPAYMENT_TRIGGERED
    })).map(repayment => ({ data: repayment, type: "REPAYMENT_TRIGGERED" as const }))

  const paidExtensions = (await prisma.subPackageExtendedAuditEvent.findMany({
    where: {
      createdAt: from && to
        ? {
          gte: from,
          lte: to
        } : undefined,
      reason: "PAID_EXTENSION",
      ...(
        subExternalId || userLogin
          ? {
            OR: [
              {
                subExternalId,
              },
              {
                urt_ae: {
                  referalDetails: {
                    attractorUserId: userLogin
                  }
                }
              }
            ]
          }
          : {}
      )
    },
    ...JournalEntryTypeToResponseBodyMapping.PAID_EXTENSION
  })).map(repayment => ({ data: repayment, type: "PAID_EXTENSION" as const }))

  const detailsUpdated = (await prisma.entityUpdatedAuditEvent.findMany({
    where: {
      createdAt: from && to
        ? {
          gte: from,
          lte: to
        } : undefined,
      entityId: subExternalId || userLogin
        ? {
          in: [
            ...(subExternalId ? [subExternalId] : []),
            ...(userLogin ? [userLogin] : []),
          ]
        } : undefined
    }
  })).map(repayment => ({ data: repayment, type: "DETAILS_UPDATED" as const }))

  const sortedEvents = sortAuditEventsByTimestamp([...usersCreated, ...subsCreated, ...repaymentsTriggered, ...paidExtensions, ...detailsUpdated])

  res.json({
    data: sortedEvents,
    subExternalId,
    userLogin
  })
}

async function resolveObjectCredentials(
  objectBy?: Extract<keyof Sub, "externalId"> | Extract<keyof User, "login">,
  objectId?: User["login"] | Sub["externalId"]
) {
  if (!objectBy || !objectId) return {}
  const subExternalId = objectBy === "externalId"
    ? objectId
    : (await prisma.user.findUniqueOrThrow({ where: { login: objectId }, include: { sub: true } })).sub?.externalId

  const userLogin = objectBy === "login"
    ? objectId
    : (await prisma.sub.findUniqueOrThrow({ where: { externalId: objectId }, include: { user: true } })).user?.login

  return {
    subExternalId, userLogin
  }
}