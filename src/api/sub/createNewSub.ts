import { Sub } from "../../../generated/prisma/client.ts";
import processAttractors from "./processAttractors.ts";
import { CreateSubRequest } from "./types.ts";

export default async function createNewSub(sub: CreateSubRequest): Promise<Sub> {
  const result = await prisma.sub.create({
    data: {
      ...sub,
      package: {
        create: {
          ...sub.package,
          endDate: new Date(sub.package.endDate),
          startDate: new Date(sub.package.startDate),
          paymentDetails: {
            create: {
              ...sub.package.paymentDetails,
              paymentDate: new Date(sub.package.paymentDetails.paymentDate),
            }
          }
        }
      }
    }
  })
  await processAttractors(result)
  return result
}