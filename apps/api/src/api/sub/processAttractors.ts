import dayjs from "dayjs";
import { type Sub } from "../../../generated/prisma/client.ts";
import { type SubGetPayload } from "../../../generated/prisma/models.ts";
import { type PrismaTrnClient } from "../types.ts";

export default async function processAttractors(directAttractor: SubGetPayload<{include: {attractedSubs: true, package: true}}>, localPrisma: PrismaTrnClient): Promise<void> {

  async function processDirectAttractor(directAttractor: SubGetPayload<{include: {attractedSubs: true, package: true}}>) {
    const tier = directAttractor.secondarySubsAmount + directAttractor.attractedSubs.length
    
    if (tier <= 10) {
      await do6MonthExtension(directAttractor)
    } else if (tier <= 50) {
      await doReward(directAttractor)
    }
  
  
  }

  async function processAttractorsTreeRecursively(attractor: Sub) {
    if (!attractor.attractorId) return
    const updatedAttractor = await localPrisma.sub.update({
      where: {
        id: attractor.attractorId
      },
      data: {
        secondarySubsAmount: {
          increment: 1
        }
      }
    })
    await processAttractorsTreeRecursively(updatedAttractor)
  }

  async function doReward(attractor: Sub): Promise<Sub> {
    return await localPrisma.sub.update({
      where: {
        id: attractor.id
      },
      data: {
        totalPayableReward: {
          increment: 50,
        }
      }
    })
  
  }
  
  async function do6MonthExtension(attractor: SubGetPayload<{include: {package: true}}>): Promise<void> {
    attractor.package && await localPrisma.sub.update({
      where: {
        id: attractor.id
      },
      data: {
        package: {
          update: {
            endDate: dayjs(attractor.package.endDate).add(6, "M").toDate()
          }
        }
      }
    })
  }

  await processDirectAttractor(directAttractor)
  await processAttractorsTreeRecursively(directAttractor)

  
}





