-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `login` VARCHAR(191) NOT NULL,
    `pwd` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'PARTNER') NOT NULL,
    `subId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_login_key`(`login`),
    UNIQUE INDEX `User_subId_key`(`subId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sub` (
    `id` VARCHAR(191) NOT NULL,
    `externalId` VARCHAR(191) NOT NULL,
    `login` VARCHAR(191) NULL,
    `pwd` VARCHAR(191) NULL,
    `note` VARCHAR(191) NULL,
    `attractorId` VARCHAR(191) NULL,
    `m3uPlaylist` VARCHAR(191) NULL,
    `epg` VARCHAR(191) NULL,
    `publicKey` VARCHAR(191) NULL,
    `media` VARCHAR(191) NULL,
    `totalPayableReward` INTEGER NOT NULL DEFAULT 0,
    `customMonetaryRewardAmount` INTEGER NULL,

    UNIQUE INDEX `Sub_externalId_key`(`externalId`),
    UNIQUE INDEX `Sub_login_key`(`login`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Package` (
    `id` VARCHAR(191) NOT NULL,
    `pkgType` ENUM('REGULAR', 'PREMIUM') NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `subId` VARCHAR(191) NOT NULL,
    `region` ENUM('EU', 'USA_CANADA') NULL,
    `paymentDate` DATETIME(3) NULL,
    `paymentAmount` INTEGER NULL,
    `paymentCurr` ENUM('USD', 'EUR') NULL,

    UNIQUE INDEX `Package_subId_key`(`subId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubCreatedAuditEvent` (
    `id` VARCHAR(191) NOT NULL,
    `subId` VARCHAR(191) NOT NULL,
    `attractorTier` INTEGER NULL,
    `timestamp` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SubCreatedAuditEvent_subId_key`(`subId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubPackageExtendedAuditEvent` (
    `id` VARCHAR(191) NOT NULL,
    `pkgId` VARCHAR(191) NOT NULL,
    `prevEndDate` DATETIME(3) NOT NULL,
    `newEndDate` DATETIME(3) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL,
    `sc_ae_id` VARCHAR(191) NULL,

    UNIQUE INDEX `SubPackageExtendedAuditEvent_sc_ae_id_key`(`sc_ae_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubRewardTriggeredAuditEvent` (
    `id` VARCHAR(191) NOT NULL,
    `subId` VARCHAR(191) NOT NULL,
    `customMonetaryRewardAmount` INTEGER NULL,
    `rewardType` ENUM('SUB_EXT', 'NEW_SUB') NOT NULL,
    `timestamp` DATETIME(3) NOT NULL,
    `sc_ae_id` VARCHAR(191) NOT NULL,
    `rewardAmount` INTEGER NOT NULL,
    `prevTotalPayableReward` INTEGER NOT NULL,
    `newTotalPayableReward` INTEGER NOT NULL,
    `highestTierReached` BOOLEAN NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubRepaymentAuditEvent` (
    `id` VARCHAR(191) NOT NULL,
    `subId` VARCHAR(191) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL,
    `repaymentAmount` INTEGER NOT NULL,
    `prevTotalPayableReward` INTEGER NOT NULL,
    `newTotalPayableReward` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubUpdatedtAuditEvent` (
    `id` VARCHAR(191) NOT NULL,
    `subId` VARCHAR(191) NOT NULL,
    `reason` VARCHAR(191) NULL,
    `timestamp` DATETIME(3) NOT NULL,
    `diff` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_subId_fkey` FOREIGN KEY (`subId`) REFERENCES `Sub`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sub` ADD CONSTRAINT `Sub_attractorId_fkey` FOREIGN KEY (`attractorId`) REFERENCES `Sub`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Package` ADD CONSTRAINT `Package_subId_fkey` FOREIGN KEY (`subId`) REFERENCES `Sub`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubCreatedAuditEvent` ADD CONSTRAINT `SubCreatedAuditEvent_subId_fkey` FOREIGN KEY (`subId`) REFERENCES `Sub`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubPackageExtendedAuditEvent` ADD CONSTRAINT `SubPackageExtendedAuditEvent_pkgId_fkey` FOREIGN KEY (`pkgId`) REFERENCES `Package`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubPackageExtendedAuditEvent` ADD CONSTRAINT `SubPackageExtendedAuditEvent_sc_ae_id_fkey` FOREIGN KEY (`sc_ae_id`) REFERENCES `SubCreatedAuditEvent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubRewardTriggeredAuditEvent` ADD CONSTRAINT `SubRewardTriggeredAuditEvent_subId_fkey` FOREIGN KEY (`subId`) REFERENCES `Sub`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubRewardTriggeredAuditEvent` ADD CONSTRAINT `SubRewardTriggeredAuditEvent_sc_ae_id_fkey` FOREIGN KEY (`sc_ae_id`) REFERENCES `SubCreatedAuditEvent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubRepaymentAuditEvent` ADD CONSTRAINT `SubRepaymentAuditEvent_subId_fkey` FOREIGN KEY (`subId`) REFERENCES `Sub`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubUpdatedtAuditEvent` ADD CONSTRAINT `SubUpdatedtAuditEvent_subId_fkey` FOREIGN KEY (`subId`) REFERENCES `Sub`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
