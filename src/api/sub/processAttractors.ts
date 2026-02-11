import { Sub } from "../../../generated/prisma/client";
import { prisma } from "../../initDB.ts";

export default async function processAttractors(newSub: Sub) {
  if (!newSub.attractorId) return

  const attractor = await prisma.sub.findFirstOrThrow({
    where: {
      id: newSub.attractorId
    }
  })

  await processDirectAttractor(attractor)
  await processAttractorsTreeRecursively(attractor)
  
}

async function processDirectAttractor(attractor: Sub) {
  const directSubAmount = await prisma.sub.count({where: {
    attractedBy: {
      id: attractor.id,
      
    }
  }})
  const tier = attractor.secondarySubsAmount + directSubAmount
  console.log('tier ', tier);
  
  if (tier <= 10) {

  } else if (tier <= 20) {

  } else if (tier <= 30) {

  } else if (tier <= 40) {

  } else if (tier <= 50) {

  } else {

  }


}

async function processAttractorsTreeRecursively(attractor: Sub) {
  if (!attractor.attractorId) return
  const updatedAttractor = await prisma.sub.update({
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