-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Package" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pkgType" TEXT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "subId" TEXT NOT NULL,
    "paymentDate" DATETIME,
    "paymentAmount" INTEGER,
    "paymentCurr" TEXT,
    CONSTRAINT "Package_subId_fkey" FOREIGN KEY ("subId") REFERENCES "Sub" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Package" ("endDate", "id", "paymentAmount", "paymentCurr", "paymentDate", "pkgType", "startDate", "subId") SELECT "endDate", "id", "paymentAmount", "paymentCurr", "paymentDate", "pkgType", "startDate", "subId" FROM "Package";
DROP TABLE "Package";
ALTER TABLE "new_Package" RENAME TO "Package";
CREATE UNIQUE INDEX "Package_subId_key" ON "Package"("subId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
