/*
  Warnings:

  - Added the required column `totalPayableReward` to the `Sub` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sub" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "externalId" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "pwd" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "userId" TEXT,
    "attractorId" TEXT,
    "secondarySubsAmount" INTEGER NOT NULL DEFAULT 0,
    "playlist" TEXT NOT NULL,
    "epg" TEXT NOT NULL,
    "archive" TEXT NOT NULL,
    "stalkerPortal" TEXT NOT NULL,
    "totalPayableReward" INTEGER NOT NULL,
    CONSTRAINT "Sub_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Sub_attractorId_fkey" FOREIGN KEY ("attractorId") REFERENCES "Sub" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Sub" ("archive", "attractorId", "epg", "externalId", "id", "login", "note", "playlist", "pwd", "secondarySubsAmount", "stalkerPortal", "userId") SELECT "archive", "attractorId", "epg", "externalId", "id", "login", "note", "playlist", "pwd", "secondarySubsAmount", "stalkerPortal", "userId" FROM "Sub";
DROP TABLE "Sub";
ALTER TABLE "new_Sub" RENAME TO "Sub";
CREATE UNIQUE INDEX "Sub_externalId_key" ON "Sub"("externalId");
CREATE UNIQUE INDEX "Sub_login_key" ON "Sub"("login");
CREATE UNIQUE INDEX "Sub_userId_key" ON "Sub"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
