import dayjs from "dayjs";
import { type Sub } from "../../../generated/prisma/client.ts";
import {prisma} from "../../initDB.ts"



export async function extendCurrentSub(id: Sub["id"], from?: string) {
  const sub = await prisma.sub.findFirstOrThrow({
    where: {
      id
    },
    include: {
      ...subIncludeAll.include,
      attractedBy: {
        ...subIncludeAll
      }
    }
  })

  const updatedSub = await prisma.sub.update({
    where: {
      id
    },
    data: {
      package: {
        update: {
          endDate: from ? dayjs(new Date(from)).add(1, "y").toDate() : dayjs(sub.package?.endDate).add(1, "y").toDate()
        }
      }
    }
  })
  
  sub.attractedBy && await processAttractor(sub.attractedBy)

  return updatedSub

}

async function processAttractor(attractor: SubFullData) {
  const tier = attractor.secondarySubsAmount + attractor.attractedSubs.length
  
  let amountToBePaid: number | undefined
  if (tier <= 20) {
    // no action required
  } else if (tier <= 30) {
    amountToBePaid = 10
  } else if (tier <= 40) {
    amountToBePaid = 20
  } else {
    amountToBePaid = 30
  } 

  amountToBePaid && await prisma.sub.update({
    where: {
      id: attractor.id
    },
    data: {
      totalPayableReward: {
        increment: amountToBePaid
      }
    }
  })
}