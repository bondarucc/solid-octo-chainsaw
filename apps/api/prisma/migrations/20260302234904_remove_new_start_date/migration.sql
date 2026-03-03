/*
  Warnings:

  - You are about to drop the column `newStartDate` on the `SubPackageExtendedAuditEvent` table. All the data in the column will be lost.
  - You are about to drop the column `prevStartDate` on the `SubPackageExtendedAuditEvent` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SubPackageExtendedAuditEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pkgId" TEXT NOT NULL,
    "prevEndDate" DATETIME NOT NULL,
    "newEndDate" DATETIME NOT NULL,
    "secondarySubsAmount" INTEGER NOT NULL,
    "directSubsAmount" INTEGER NOT NULL,
    "totalTier" INTEGER NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "sc_ae_id" TEXT NOT NULL,
    CONSTRAINT "SubPackageExtendedAuditEvent_pkgId_fkey" FOREIGN KEY ("pkgId") REFERENCES "Package" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SubPackageExtendedAuditEvent_sc_ae_id_fkey" FOREIGN KEY ("sc_ae_id") REFERENCES "SubCreatedAuditEvent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SubPackageExtendedAuditEvent" ("directSubsAmount", "id", "newEndDate", "pkgId", "prevEndDate", "sc_ae_id", "secondarySubsAmount", "timestamp", "totalTier") SELECT "directSubsAmount", "id", "newEndDate", "pkgId", "prevEndDate", "sc_ae_id", "secondarySubsAmount", "timestamp", "totalTier" FROM "SubPackageExtendedAuditEvent";
DROP TABLE "SubPackageExtendedAuditEvent";
ALTER TABLE "new_SubPackageExtendedAuditEvent" RENAME TO "SubPackageExtendedAuditEvent";
CREATE UNIQUE INDEX "SubPackageExtendedAuditEvent_sc_ae_id_key" ON "SubPackageExtendedAuditEvent"("sc_ae_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
