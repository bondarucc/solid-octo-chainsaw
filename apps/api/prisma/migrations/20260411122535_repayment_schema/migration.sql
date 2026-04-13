-- CreateTable
CREATE TABLE "SubRepaymentAuditEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subId" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "repaymentAmount" INTEGER NOT NULL,
    "prevTotalPayableReward" INTEGER NOT NULL,
    "newTotalPayableReward" INTEGER NOT NULL,
    CONSTRAINT "SubRepaymentAuditEvent_subId_fkey" FOREIGN KEY ("subId") REFERENCES "Sub" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
