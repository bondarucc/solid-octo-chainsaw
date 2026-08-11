/*
  Warnings:

  - A unique constraint covering the columns `[spe_ae_id]` on the table `UserRewardTriggeredAuditEvent` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `UserRewardTriggeredAuditEvent` ADD COLUMN `spe_ae_id` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `UserRewardTriggeredAuditEvent_spe_ae_id_key` ON `UserRewardTriggeredAuditEvent`(`spe_ae_id`);

-- AddForeignKey
ALTER TABLE `UserRewardTriggeredAuditEvent` ADD CONSTRAINT `UserRewardTriggeredAuditEvent_spe_ae_id_fkey` FOREIGN KEY (`spe_ae_id`) REFERENCES `SubPackageExtendedAuditEvent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
