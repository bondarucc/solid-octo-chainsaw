// import dayjs from "dayjs"
// import createNewSub from "../api/sub/createNewSub.ts"
// import { generateMockedSubRequest, purgeDB } from "./helpers.ts"
// import { extendCurrentSub } from "../api/sub/extendCurrentSub.ts"
// import { subIncludeAll } from "../api/sub/helpers.ts"
// import {prisma} from "../initDB.ts"

// beforeEach(async () => {
//   // await seedDB()
//   await purgeDB()
// })

// it('should increment secondarySubsAmount up the tree once new Sub created', async () => {
//   const firstSub = await createNewSub(generateMockedSubRequest())
//   const secondSub = await createNewSub(generateMockedSubRequest({ attractorId: firstSub.id }))
//   const thirdSub = await createNewSub(generateMockedSubRequest({ attractorId: secondSub.id }))

//   const updatedFirstSub = await prisma.sub.findFirstOrThrow({
//     where: {
//       id: firstSub.id
//     }
//   })

//   expect(updatedFirstSub.secondarySubsAmount).toBe(1)

// })

// it('should apply 6 months extension for tier 1 attractor', async () => {
//   const firstSub = await createNewSub(generateMockedSubRequest())

//   await createNewSub(generateMockedSubRequest({ attractorId: firstSub.id }))

//   const updatedFirstSub = await prisma.sub.findFirstOrThrow({ where: { id: firstSub.id }, include: { package: true } })

//   expect(updatedFirstSub.package?.endDate.toString()).not.toBe(firstSub.package?.endDate.toString())
//   expect(dayjs(updatedFirstSub.package?.endDate).subtract(6, "M").isSame(dayjs(firstSub.package?.endDate))).toBe(true)
// })

// it("should increase payable reward once new Sub created", async () => {
//   const firstSub = await createNewSub(generateMockedSubRequest())
//   await prisma.sub.update({
//     where: {
//       id: firstSub.id
//     },
//     data: {
//       secondarySubsAmount: 10
//     }
//   })
//   void await createNewSub(generateMockedSubRequest({ attractorId: firstSub.id }))
//   void await createNewSub(generateMockedSubRequest({ attractorId: firstSub.id }))

//   const updatedFirstSub = await prisma.sub.findFirstOrThrow({where: { id: firstSub.id }, include: {attractedSubs: true}})
//   // console.log(JSON.stringify(updatedFirstSub))
//   expect(updatedFirstSub.totalPayableReward).toBe(100)

// })

// it("should extend subscription", async () => {
//   let firstSub = await createNewSub(generateMockedSubRequest())
//   await prisma.sub.update({
//     where: {
//       id: firstSub.id
//     },
//     data: {
//       secondarySubsAmount: 19
//     }
//   })

//   const secondSub = await createNewSub(generateMockedSubRequest({ attractorId: firstSub.id }))
//   const thirdSub = await createNewSub(generateMockedSubRequest({ attractorId: firstSub.id }))

//   void await extendCurrentSub(secondSub.id)
//   void await extendCurrentSub(thirdSub.id)

//   firstSub = await prisma.sub.findFirstOrThrow({
//     where: {
//       id: firstSub.id
//     },
//     ...subIncludeAll
//   })

//   expect(firstSub.totalPayableReward).toBe(120)

// })
