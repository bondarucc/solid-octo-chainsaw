/*
  Warnings:

  - Added the required column `subId` to the `SubSecondarySubsAmountIncrementedAuditEvent` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SubSecondarySubsAmountIncrementedAuditEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sc_ae_id" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "prevSecondarySubsAmount" INTEGER NOT NULL,
    "newSecondarySubsAmount" INTEGER NOT NULL,
    "subId" TEXT NOT NULL,
    CONSTRAINT "SubSecondarySubsAmountIncrementedAuditEvent_sc_ae_id_fkey" FOREIGN KEY ("sc_ae_id") REFERENCES "SubCreatedAuditEvent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SubSecondarySubsAmountIncrementedAuditEvent_subId_fkey" FOREIGN KEY ("subId") REFERENCES "Sub" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SubSecondarySubsAmountIncrementedAuditEvent" ("id", "newSecondarySubsAmount", "prevSecondarySubsAmount", "sc_ae_id", "timestamp") SELECT "id", "newSecondarySubsAmount", "prevSecondarySubsAmount", "sc_ae_id", "timestamp" FROM "SubSecondarySubsAmountIncrementedAuditEvent";
DROP TABLE "SubSecondarySubsAmountIncrementedAuditEvent";
ALTER TABLE "new_SubSecondarySubsAmountIncrementedAuditEvent" RENAME TO "SubSecondarySubsAmountIncrementedAuditEvent";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
