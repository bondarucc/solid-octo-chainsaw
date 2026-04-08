/*
  Warnings:

  - You are about to drop the `SubSecondarySubsAmountIncrementedAuditEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `directSubsAmount` on the `SubRewardTriggeredAuditEvent` table. All the data in the column will be lost.
  - You are about to drop the column `secondarySubsAmount` on the `SubRewardTriggeredAuditEvent` table. All the data in the column will be lost.
  - You are about to drop the column `totalTier` on the `SubRewardTriggeredAuditEvent` table. All the data in the column will be lost.
  - Added the required column `rewardType` to the `SubRewardTriggeredAuditEvent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubCreatedAuditEvent" ADD COLUMN "attractorTier" INTEGER;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SubSecondarySubsAmountIncrementedAuditEvent";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SubRewardTriggeredAuditEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subId" TEXT NOT NULL,
    "rewardType" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "sc_ae_id" TEXT NOT NULL,
    "rewardAmount" INTEGER NOT NULL,
    "prevTotalPayableReward" INTEGER NOT NULL,
    "newTotalPayableReward" INTEGER NOT NULL,
    CONSTRAINT "SubRewardTriggeredAuditEvent_subId_fkey" FOREIGN KEY ("subId") REFERENCES "Sub" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SubRewardTriggeredAuditEvent_sc_ae_id_fkey" FOREIGN KEY ("sc_ae_id") REFERENCES "SubCreatedAuditEvent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SubRewardTriggeredAuditEvent" ("id", "newTotalPayableReward", "prevTotalPayableReward", "rewardAmount", "sc_ae_id", "subId", "timestamp") SELECT "id", "newTotalPayableReward", "prevTotalPayableReward", "rewardAmount", "sc_ae_id", "subId", "timestamp" FROM "SubRewardTriggeredAuditEvent";
DROP TABLE "SubRewardTriggeredAuditEvent";
ALTER TABLE "new_SubRewardTriggeredAuditEvent" RENAME TO "SubRewardTriggeredAuditEvent";
CREATE UNIQUE INDEX "SubRewardTriggeredAuditEvent_sc_ae_id_key" ON "SubRewardTriggeredAuditEvent"("sc_ae_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
