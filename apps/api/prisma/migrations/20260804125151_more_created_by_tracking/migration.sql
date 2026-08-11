/*
  Warnings:

  - Added the required column `createdByUserId` to the `SubPackageExtendedAuditEvent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdByUserId` to the `UserRepaymentAuditEvent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `SubPackageExtendedAuditEvent` ADD COLUMN `createdByUserId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `UserRepaymentAuditEvent` ADD COLUMN `createdByUserId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `SubPackageExtendedAuditEvent` ADD CONSTRAINT `SubPackageExtendedAuditEvent_createdByUserId_fkey` FOREIGN KEY (`createdByUserId`) REFERENCES `User`(`login`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserRepaymentAuditEvent` ADD CONSTRAINT `UserRepaymentAuditEvent_createdByUserId_fkey` FOREIGN KEY (`createdByUserId`) REFERENCES `User`(`login`) ON DELETE RESTRICT ON UPDATE CASCADE;
