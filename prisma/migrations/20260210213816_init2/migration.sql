/*
  Warnings:

  - You are about to drop the `Abonent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Partner` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `abonentId` on the `Package` table. All the data in the column will be lost.
  - Added the required column `subId` to the `Package` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Abonent_externalId_key";

-- DropIndex
DROP INDEX "Partner_externalId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Abonent";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Partner";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "login" TEXT NOT NULL,
    "pwd" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Sub" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "externalId" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "pwd" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "userId" TEXT,
    "attractorId" TEXT NOT NULL,
    "playlist" TEXT NOT NULL,
    "epg" TEXT NOT NULL,
    "archive" TEXT NOT NULL,
    "stalkerPortal" TEXT NOT NULL,
    CONSTRAINT "Sub_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Sub_attractorId_fkey" FOREIGN KEY ("attractorId") REFERENCES "Sub" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Package" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pkgType" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "subId" TEXT NOT NULL,
    CONSTRAINT "Package_subId_fkey" FOREIGN KEY ("subId") REFERENCES "Sub" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Package" ("endDate", "id", "pkgType", "startDate") SELECT "endDate", "id", "pkgType", "startDate" FROM "Package";
DROP TABLE "Package";
ALTER TABLE "new_Package" RENAME TO "Package";
CREATE UNIQUE INDEX "Package_subId_key" ON "Package"("subId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Sub_externalId_key" ON "Sub"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "Sub_login_key" ON "Sub"("login");

-- CreateIndex
CREATE UNIQUE INDEX "Sub_userId_key" ON "Sub"("userId");
