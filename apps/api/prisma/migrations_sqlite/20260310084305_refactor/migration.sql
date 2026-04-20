/*
  Warnings:

  - You are about to drop the column `playlist` on the `Sub` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[login]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sub" (
    "externalId" TEXT NOT NULL,
    "note" TEXT,
    "attractorId" TEXT,
    "secondarySubsAmount" INTEGER NOT NULL DEFAULT 0,
    "m3uPlaylist" TEXT,
    "epg" TEXT,
    "publicKey" TEXT,
    "media" TEXT,
    "totalPayableReward" INTEGER NOT NULL DEFAULT 0,
    "archive" TEXT,
    "stalkerPortal" TEXT,
    "login" TEXT,
    "pwd" TEXT,
    "id" TEXT NOT NULL PRIMARY KEY,
    CONSTRAINT "Sub_attractorId_fkey" FOREIGN KEY ("attractorId") REFERENCES "Sub" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Sub" ("archive", "attractorId", "epg", "externalId", "id", "login", "note", "pwd", "secondarySubsAmount", "stalkerPortal", "totalPayableReward") SELECT "archive", "attractorId", "epg", "externalId", "id", "login", "note", "pwd", "secondarySubsAmount", "stalkerPortal", "totalPayableReward" FROM "Sub";
DROP TABLE "Sub";
ALTER TABLE "new_Sub" RENAME TO "Sub";
CREATE UNIQUE INDEX "Sub_externalId_key" ON "Sub"("externalId");
CREATE UNIQUE INDEX "Sub_login_key" ON "Sub"("login");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");
