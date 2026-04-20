/*
  Warnings:

  - You are about to drop the `PaymentDetails` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `Package` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `Sub` table. All the data in the column will be lost.
  - Added the required column `paymentAmount` to the `Package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentCurr` to the `Package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentDate` to the `Package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "PaymentDetails_packageId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PaymentDetails";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Package" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pkgType" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "subId" TEXT NOT NULL,
    "paymentDate" DATETIME NOT NULL,
    "paymentAmount" INTEGER NOT NULL,
    "paymentCurr" TEXT NOT NULL,
    CONSTRAINT "Package_subId_fkey" FOREIGN KEY ("subId") REFERENCES "Sub" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Package" ("endDate", "id", "pkgType", "startDate", "subId") SELECT "endDate", "id", "pkgType", "startDate", "subId" FROM "Package";
DROP TABLE "Package";
ALTER TABLE "new_Package" RENAME TO "Package";
CREATE UNIQUE INDEX "Package_subId_key" ON "Package"("subId");
CREATE TABLE "new_Sub" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "externalId" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "pwd" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "attractorId" TEXT,
    "secondarySubsAmount" INTEGER NOT NULL DEFAULT 0,
    "playlist" TEXT NOT NULL,
    "epg" TEXT NOT NULL,
    "archive" TEXT NOT NULL,
    "stalkerPortal" TEXT NOT NULL,
    "totalPayableReward" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Sub_attractorId_fkey" FOREIGN KEY ("attractorId") REFERENCES "Sub" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Sub" ("archive", "attractorId", "epg", "externalId", "id", "login", "note", "playlist", "pwd", "secondarySubsAmount", "stalkerPortal", "totalPayableReward") SELECT "archive", "attractorId", "epg", "externalId", "id", "login", "note", "playlist", "pwd", "secondarySubsAmount", "stalkerPortal", "totalPayableReward" FROM "Sub";
DROP TABLE "Sub";
ALTER TABLE "new_Sub" RENAME TO "Sub";
CREATE UNIQUE INDEX "Sub_externalId_key" ON "Sub"("externalId");
CREATE UNIQUE INDEX "Sub_login_key" ON "Sub"("login");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "login" TEXT NOT NULL,
    "pwd" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "subId" TEXT NOT NULL,
    CONSTRAINT "User_subId_fkey" FOREIGN KEY ("subId") REFERENCES "Sub" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("id", "login", "pwd", "role") SELECT "id", "login", "pwd", "role" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_subId_key" ON "User"("subId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
