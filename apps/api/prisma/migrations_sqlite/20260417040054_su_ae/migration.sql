-- CreateTable
CREATE TABLE "SubUpdatedtAuditEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subId" TEXT NOT NULL,
    "reason" TEXT,
    "timestamp" DATETIME NOT NULL,
    "diff" TEXT NOT NULL,
    CONSTRAINT "SubUpdatedtAuditEvent_subId_fkey" FOREIGN KEY ("subId") REFERENCES "Sub" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
