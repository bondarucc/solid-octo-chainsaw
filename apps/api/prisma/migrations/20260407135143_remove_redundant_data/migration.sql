/*
  Warnings:

  - You are about to drop the column `directSubsAmount` on the `SubPackageExtendedAuditEvent` table. All the data in the column will be lost.
  - You are about to drop the column `secondarySubsAmount` on the `SubPackageExtendedAuditEvent` table. All the data in the column will be lost.
  - You are about to drop the column `totalTier` on the `SubPackageExtendedAuditEvent` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SubPackageExtendedAuditEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pkgId" TEXT NOT NULL,
    "prevEndDate" DATETIME NOT NULL,
    "newEndDate" DATETIME NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "sc_ae_id" TEXT NOT NULL,
    CONSTRAINT "SubPackageExtendedAuditEvent_pkgId_fkey" FOREIGN KEY ("pkgId") REFERENCES "Package" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SubPackageExtendedAuditEvent_sc_ae_id_fkey" FOREIGN KEY ("sc_ae_id") REFERENCES "SubCreatedAuditEvent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SubPackageExtendedAuditEvent" ("id", "newEndDate", "pkgId", "prevEndDate", "sc_ae_id", "timestamp") SELECT "id", "newEndDate", "pkgId", "prevEndDate", "sc_ae_id", "timestamp" FROM "SubPackageExtendedAuditEvent";
DROP TABLE "SubPackageExtendedAuditEvent";
ALTER TABLE "new_SubPackageExtendedAuditEvent" RENAME TO "SubPackageExtendedAuditEvent";
CREATE UNIQUE INDEX "SubPackageExtendedAuditEvent_sc_ae_id_key" ON "SubPackageExtendedAuditEvent"("sc_ae_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
