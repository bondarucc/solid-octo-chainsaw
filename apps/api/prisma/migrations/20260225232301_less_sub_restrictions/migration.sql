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
    "secondarySubsAmount" INTEGER NOT NULL DEFAULT 0,
    "playlist" TEXT,
    "epg" TEXT,
    "archive" TEXT,
    "stalkerPortal" TEXT,
    "totalPayableReward" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Sub_attractorId_fkey" FOREIGN KEY ("attractorId") REFERENCES "Sub" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Sub" ("archive", "attractorId", "epg", "externalId", "id", "login", "note", "playlist", "pwd", "secondarySubsAmount", "stalkerPortal", "totalPayableReward") SELECT "archive", "attractorId", "epg", "externalId", "id", "login", "note", "playlist", "pwd", "secondarySubsAmount", "stalkerPortal", "totalPayableReward" FROM "Sub";
DROP TABLE "Sub";
ALTER TABLE "new_Sub" RENAME TO "Sub";
CREATE UNIQUE INDEX "Sub_externalId_key" ON "Sub"("externalId");
CREATE UNIQUE INDEX "Sub_login_key" ON "Sub"("login");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
