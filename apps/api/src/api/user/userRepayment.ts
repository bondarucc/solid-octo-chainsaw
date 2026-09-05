import type { RequestHandler } from "express"
import { Prisma } from "../../../generated/prisma/index.js"
import { prisma } from "../../initDB.js"
import type { Locals } from "../auth/authMiddleware.js"

export type CreateRepaymentRequestBody = {
  amount: number
}

const dataToBeReturned = {
  newTotalPayableReward: true,
  prevTotalPayableReward: true,
  repaymentAmount: true
} as const satisfies Prisma.UserRepaymentAuditEventSelect

export type CreateRepaymentResponseBody = Prisma.UserRepaymentAuditEventGetPayload<{select: typeof dataToBeReturned}>

export const doUserRepayment: RequestHandler<{userLogin: string}, CreateRepaymentResponseBody, CreateRepaymentRequestBody, null, Locals> = async (req, res) => {
  const {amount} = req.body
  const {login: actor} = res.locals.userData
  if (amount < 0) throw "invalid input"

  const {userLogin} = req.params

  const {totalPayableReward: prevTotalPayableReward} = await prisma.user.findFirstOrThrow({
    where: {login: userLogin}
  })

  if (prevTotalPayableReward < amount) throw "invalid input"  

  const response = await prisma.$transaction(async trn => {
    const {totalPayableReward: newTotalPayableReward} = await trn.user.update({
      where: {login: userLogin},
      data: {
        totalPayableReward: {
          decrement: amount
        }
      }
    })

    return await trn.userRepaymentAuditEvent.create({
      data: {
        createdAt: new Date(),
        newTotalPayableReward,
        prevTotalPayableReward,
        repaymentAmount: amount,
        createdBy: {
          connect: {
            login: actor
          }
        },
        user: {
          connect: {
            login: userLogin
          }
        }
      },
      select: dataToBeReturned
    })
  })
    
  res.json(response)
}