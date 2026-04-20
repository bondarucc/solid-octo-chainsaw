-- CreateTable
CREATE TABLE "SubCreatedAuditEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subId" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL,
    CONSTRAINT "SubCreatedAuditEvent_subId_fkey" FOREIGN KEY ("subId") REFERENCES "Sub" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SubPackageExtendedAuditEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pkgId" TEXT NOT NULL,
    "prevStartDate" DATETIME NOT NULL,
    "prevEndDate" DATETIME NOT NULL,
    "newStartDate" DATETIME NOT NULL,
    "newEndDate" DATETIME NOT NULL,
    "secondarySubsAmount" INTEGER NOT NULL,
    "directSubsAmount" INTEGER NOT NULL,
    "totalTier" INTEGER NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "sc_ae_id" TEXT NOT NULL,
    CONSTRAINT "SubPackageExtendedAuditEvent_pkgId_fkey" FOREIGN KEY ("pkgId") REFERENCES "Package" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SubPackageExtendedAuditEvent_sc_ae_id_fkey" FOREIGN KEY ("sc_ae_id") REFERENCES "SubCreatedAuditEvent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SubRewardTriggeredAuditEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subId" TEXT NOT NULL,
    "secondarySubsAmount" INTEGER NOT NULL,
    "directSubsAmount" INTEGER NOT NULL,
    "totalTier" INTEGER NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "sc_ae_id" TEXT NOT NULL,
    "rewardAmount" INTEGER NOT NULL,
    "prevTotalPayableReward" INTEGER NOT NULL,
    "newTotalPayableReward" INTEGER NOT NULL,
    CONSTRAINT "SubRewardTriggeredAuditEvent_subId_fkey" FOREIGN KEY ("subId") REFERENCES "Sub" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SubRewardTriggeredAuditEvent_sc_ae_id_fkey" FOREIGN KEY ("sc_ae_id") REFERENCES "SubCreatedAuditEvent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SubSecondarySubsAmountIncrementedAuditEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sc_ae_id" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "prevSecondarySubsAmount" INTEGER NOT NULL,
    "newSecondarySubsAmount" INTEGER NOT NULL,
    CONSTRAINT "SubSecondarySubsAmountIncrementedAuditEvent_sc_ae_id_fkey" FOREIGN KEY ("sc_ae_id") REFERENCES "SubCreatedAuditEvent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "SubCreatedAuditEvent_subId_key" ON "SubCreatedAuditEvent"("subId");

-- CreateIndex
CREATE UNIQUE INDEX "SubPackageExtendedAuditEvent_sc_ae_id_key" ON "SubPackageExtendedAuditEvent"("sc_ae_id");

-- CreateIndex
CREATE UNIQUE INDEX "SubRewardTriggeredAuditEvent_sc_ae_id_key" ON "SubRewardTriggeredAuditEvent"("sc_ae_id");
