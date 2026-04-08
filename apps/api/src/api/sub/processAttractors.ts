// import dayjs from "dayjs";
// import { SC_AE, type Sub } from "../../../generated/prisma/client.ts";
// import { type SubGetPayload } from "../../../generated/prisma/models.ts";
// import { type PrismaTrnClient } from "../types.ts";
// import { CreateSubRequestBody } from "./types.ts";

// export default async function processAttractors(directAttractor: SubGetPayload<{include: {attractedSubs: true, package: true}}>, sc_ae: SC_AE, localPrisma: PrismaTrnClient): Promise<void> {
//   const tier = directAttractor.secondarySubsAmount + directAttractor.attractedSubs.length

//   async function processDirectAttractor() { 
//     if (tier <= 10) {
//       await do6MonthExtension()
//     } else if (tier <= 50) {
//       await doReward()
//     }
//   }

//   async function processAttractorsTreeRecursively(attractor: Sub) {
//     if (!attractor.attractorId) return
//     const updatedAttractor = await localPrisma.sub.update({
//       where: {
//         id: attractor.attractorId
//       },
//       data: {
//         secondarySubsAmount: {
//           increment: 1
//         }
//       }
//     })
//     await localPrisma.sSSAI_AE.create({
//       data: {
//         sc_ae: {
//           connect: {
//             id: sc_ae.id
//           }
//         },
//         timestamp: new Date(),
//         prevSecondarySubsAmount: updatedAttractor.secondarySubsAmount - 1,
//         newSecondarySubsAmount: updatedAttractor.secondarySubsAmount,
//         sub: {
//           connect: {
//             id: updatedAttractor.id
//           }
//         }
//       }
//     })
//     await processAttractorsTreeRecursively(updatedAttractor)
//   }

//   async function doReward(): Promise<void> {
//     const rewardAmount = 50

//     const result = await localPrisma.sub.update({
//       where: {
//         id: directAttractor.id
//       },
//       data: {
//         totalPayableReward: {
//           increment: rewardAmount,
//         }
//       }
//     })

//     await localPrisma.sRT_AE.create({
//       data: {
//         directSubsAmount: directAttractor.attractedSubs.length,
//         newTotalPayableReward: result.totalPayableReward,
//         prevTotalPayableReward: directAttractor.totalPayableReward,
//         rewardAmount,
//         secondarySubsAmount: directAttractor.secondarySubsAmount,
//         timestamp: new Date(),
//         totalTier: tier,
//         sc_ae: {
//           connect: {
//             id: sc_ae.id
//           }
//         },
//         sub: {
//           connect: {
//             id: directAttractor.id
//           }
//         }
//       }
//     })

//   }

//   async function do6MonthExtension(): Promise<void> {
//     if (directAttractor.package) {
//       const newEndDate = dayjs(directAttractor.package.endDate).add(6, "M").toDate()
//       await localPrisma.sub.update({
//         where: {
//           id: directAttractor.id
//         },
//         data: {
//           package: {
//             update: {
//               endDate: newEndDate
//             }
//           }
//         }
//       })
//       await localPrisma.sPE_AE.create({
//         data: {
//           directSubsAmount: directAttractor.attractedSubs.length,
//           newEndDate: newEndDate,
//           prevEndDate: directAttractor.package.endDate,
//           secondarySubsAmount: directAttractor.secondarySubsAmount,
//           timestamp: new Date(),
//           totalTier: tier,
//           package: {
//             connect: {
//               id: directAttractor.package.id
//             }
//           },
//           sc_ae: {
//             connect: {
//               id: sc_ae.id
//             }
//           }
//         }
//       })

//     }
//   }

//   await processDirectAttractor()
//   await processAttractorsTreeRecursively(directAttractor)
// }





