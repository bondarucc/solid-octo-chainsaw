/*
  Warnings:

  - Added the required column `createdByUserId` to the `EntityUpdatedAuditEvent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `EntityUpdatedAuditEvent` ADD COLUMN `createdByUserId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `EntityUpdatedAuditEvent` ADD CONSTRAINT `EntityUpdatedAuditEvent_createdByUserId_fkey` FOREIGN KEY (`createdByUserId`) REFERENCES `User`(`login`) ON DELETE RESTRICT ON UPDATE CASCADE;
