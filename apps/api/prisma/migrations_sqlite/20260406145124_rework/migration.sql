/*
  Warnings:

  - You are about to drop the column `archive` on the `Sub` table. All the data in the column will be lost.
  - You are about to drop the column `secondarySubsAmount` on the `Sub` table. All the data in the column will be lost.
  - You are about to drop the column `stalkerPortal` on the `Sub` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sub" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "externalId" TEXT NOT NULL,
    "login" TEXT,
    "pwd" TEXT,
    "note" TEXT,
    "attractorId" TEXT,
    "m3uPlaylist" TEXT,
    "epg" TEXT,
    "publicKey" TEXT,
    "media" TEXT,
    "totalPayableReward" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Sub_attractorId_fkey" FOREIGN KEY ("attractorId") REFERENCES "Sub" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Sub" ("attractorId", "epg", "externalId", "id", "login", "m3uPlaylist", "media", "note", "publicKey", "pwd", "totalPayableReward") SELECT "attractorId", "epg", "externalId", "id", "login", "m3uPlaylist", "media", "note", "publicKey", "pwd", "totalPayableReward" FROM "Sub";
DROP TABLE "Sub";
ALTER TABLE "new_Sub" RENAME TO "Sub";
CREATE UNIQUE INDEX "Sub_externalId_key" ON "Sub"("externalId");
CREATE UNIQUE INDEX "Sub_login_key" ON "Sub"("login");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
