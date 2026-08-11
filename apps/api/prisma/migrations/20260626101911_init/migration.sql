-- CreateTable
CREATE TABLE `User` (
    `login` VARCHAR(191) NOT NULL,
    `pwd` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'PARTNER') NOT NULL,
    `subExternalId` VARCHAR(191) NULL,
    `totalPayableReward` INTEGER NOT NULL DEFAULT 0,
    `customMonetaryRewardAmount` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_subExternalId_key`(`subExternalId`),
    PRIMARY KEY (`login`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sub` (
    `externalId` VARCHAR(191) NOT NULL,
    `login` VARCHAR(191) NULL,
    `pwd` VARCHAR(191) NULL,
    `note` VARCHAR(191) NULL,
    `attractorId` VARCHAR(191) NULL,
    `m3uPlaylist` VARCHAR(191) NULL,
    `epg` VARCHAR(191) NULL,
    `publicKey` VARCHAR(191) NULL,
    `media` VARCHAR(191) NULL,
    `pkgType` ENUM('REGULAR', 'PREMIUM') NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `region` ENUM('EU', 'USA_CANADA') NULL,
    `createdAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`externalId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReferalDetails` (
    `attractedSubExternalId` VARCHAR(191) NOT NULL,
    `attractorUserId` VARCHAR(191) NOT NULL,
    `effectiveAttractorTier` INTEGER NOT NULL,

    PRIMARY KEY (`attractedSubExternalId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` VARCHAR(191) NOT NULL,
    `currency` ENUM('USD', 'EUR') NOT NULL,
    `amount` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `subExternalId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubPackageExtendedAuditEvent` (
    `id` VARCHAR(191) NOT NULL,
    `prevEndDate` DATETIME(3) NOT NULL,
    `newEndDate` DATETIME(3) NOT NULL,
    `attractedSubExternalId` VARCHAR(191) NULL,
    `paymentId` VARCHAR(191) NOT NULL,
    `subExternalId` VARCHAR(191) NOT NULL,
    `reason` ENUM('PAID_EXTENSION', 'NEW_SUB_ATTRACTED') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SubPackageExtendedAuditEvent_attractedSubExternalId_key`(`attractedSubExternalId`),
    UNIQUE INDEX `SubPackageExtendedAuditEvent_paymentId_key`(`paymentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserRewardTriggeredAuditEvent` (
    `id` VARCHAR(191) NOT NULL,
    `customMonetaryRewardAmount` INTEGER NULL,
    `rewardType` ENUM('SUB_EXT', 'NEW_SUB') NOT NULL,
    `rewardAmount` INTEGER NOT NULL,
    `prevTotalPayableReward` INTEGER NOT NULL,
    `newTotalPayableReward` INTEGER NOT NULL,
    `highestTierReached` BOOLEAN NOT NULL DEFAULT false,
    `referalDetails_attractedSubExternalId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserRepaymentAuditEvent` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `repaymentAmount` INTEGER NOT NULL,
    `prevTotalPayableReward` INTEGER NOT NULL,
    `newTotalPayableReward` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EntityUpdatedAuditEvent` (
    `id` VARCHAR(191) NOT NULL,
    `entityId` VARCHAR(191) NOT NULL,
    `reason` VARCHAR(191) NULL,
    `diff` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_subExternalId_fkey` FOREIGN KEY (`subExternalId`) REFERENCES `Sub`(`externalId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReferalDetails` ADD CONSTRAINT `ReferalDetails_attractedSubExternalId_fkey` FOREIGN KEY (`attractedSubExternalId`) REFERENCES `Sub`(`externalId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReferalDetails` ADD CONSTRAINT `ReferalDetails_attractorUserId_fkey` FOREIGN KEY (`attractorUserId`) REFERENCES `User`(`login`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_subExternalId_fkey` FOREIGN KEY (`subExternalId`) REFERENCES `Sub`(`externalId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubPackageExtendedAuditEvent` ADD CONSTRAINT `SubPackageExtendedAuditEvent_attractedSubExternalId_fkey` FOREIGN KEY (`attractedSubExternalId`) REFERENCES `ReferalDetails`(`attractedSubExternalId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubPackageExtendedAuditEvent` ADD CONSTRAINT `SubPackageExtendedAuditEvent_paymentId_fkey` FOREIGN KEY (`paymentId`) REFERENCES `Payment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubPackageExtendedAuditEvent` ADD CONSTRAINT `SubPackageExtendedAuditEvent_subExternalId_fkey` FOREIGN KEY (`subExternalId`) REFERENCES `Sub`(`externalId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserRewardTriggeredAuditEvent` ADD CONSTRAINT `UserRewardTriggeredAuditEvent_referalDetails_attractedSubEx_fkey` FOREIGN KEY (`referalDetails_attractedSubExternalId`) REFERENCES `ReferalDetails`(`attractedSubExternalId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserRepaymentAuditEvent` ADD CONSTRAINT `UserRepaymentAuditEvent_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`login`) ON DELETE RESTRICT ON UPDATE CASCADE;
