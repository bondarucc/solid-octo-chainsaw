import { Package, Sub, PaymentDetails } from "../../../generated/prisma/client.ts";

export type CreateSubRequest = Omit<Sub, "id" | "secondarySubsAmount"> & {
  package: Pick<Package, "pkgType"> & {
    startDate: string,
    endDate: string,
    paymentDetails: Pick<PaymentDetails, "paymentAmount" | "paymentCurr"> & {
      paymentDate: string
    }
  }
}