// import { prisma } from "../initDB.ts"
import createNewSub from "../api/sub/createNewSub.ts"
import { seedDB, purgeDB, generateDummySub, generateMockedSubRequest } from "./helpers.ts"

const gen = generateDummySub()

beforeEach(async () => {
  // await seedDB()
  await purgeDB()
})

it('should increment secondarySubsAmount up the tree', async () => {
  const firstSub = await createNewSub(generateMockedSubRequest())
  const secondSub = await createNewSub(generateMockedSubRequest({attractorId: firstSub.id}))
  const thirdSub = await createNewSub(generateMockedSubRequest({attractorId: secondSub.id}))

  const updatedFirstSub = await prisma.sub.findFirstOrThrow({
    where: {
      id: firstSub.id
    }
  })

  expect(updatedFirstSub.secondarySubsAmount).toBe(1)
  
})