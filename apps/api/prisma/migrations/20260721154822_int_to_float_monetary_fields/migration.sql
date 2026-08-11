/*
  Warnings:

  - You are about to alter the column `amount` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `customMonetaryRewardAmount` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `repaymentAmount` on the `UserRepaymentAuditEvent` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `prevTotalPayableReward` on the `UserRepaymentAuditEvent` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `newTotalPayableReward` on the `UserRepaymentAuditEvent` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `customMonetaryRewardAmount` on the `UserRewardTriggeredAuditEvent` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `rewardAmount` on the `UserRewardTriggeredAuditEvent` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `prevTotalPayableReward` on the `UserRewardTriggeredAuditEvent` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `newTotalPayableReward` on the `UserRewardTriggeredAuditEvent` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Payment` MODIFY `amount` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `customMonetaryRewardAmount` DOUBLE NULL;

-- AlterTable
ALTER TABLE `UserRepaymentAuditEvent` MODIFY `repaymentAmount` DOUBLE NOT NULL,
    MODIFY `prevTotalPayableReward` DOUBLE NOT NULL,
    MODIFY `newTotalPayableReward` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `UserRewardTriggeredAuditEvent` MODIFY `customMonetaryRewardAmount` DOUBLE NULL,
    MODIFY `rewardAmount` DOUBLE NOT NULL,
    MODIFY `prevTotalPayableReward` DOUBLE NOT NULL,
    MODIFY `newTotalPayableReward` DOUBLE NOT NULL;
