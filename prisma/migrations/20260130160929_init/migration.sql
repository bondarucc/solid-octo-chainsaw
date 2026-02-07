-- CreateTable
CREATE TABLE "Partner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "externalId" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "pwd" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Abonent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "externalId" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "pwd" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "partnerId" INTEGER NOT NULL,
    "playlist" TEXT NOT NULL,
    "epg" TEXT NOT NULL,
    "archive" TEXT NOT NULL,
    "stalkerPortal" TEXT NOT NULL,
    CONSTRAINT "Abonent_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Package" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pkgType" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "abonentId" INTEGER NOT NULL,
    CONSTRAINT "Package_abonentId_fkey" FOREIGN KEY ("abonentId") REFERENCES "Abonent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PaymentDetails" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "paymentDate" DATETIME NOT NULL,
    "paymentAmount" INTEGER NOT NULL,
    "paymentCurr" TEXT NOT NULL,
    "packageId" INTEGER NOT NULL,
    CONSTRAINT "PaymentDetails_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Partner_externalId_key" ON "Partner"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "Abonent_externalId_key" ON "Abonent"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "Package_abonentId_key" ON "Package"("abonentId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentDetails_packageId_key" ON "PaymentDetails"("packageId");
