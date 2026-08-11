/*
  Warnings:

  - Added the required column `createdByUserId` to the `Sub` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Sub` ADD COLUMN `createdByUserId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `createdByUserId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_createdByUserId_fkey` FOREIGN KEY (`createdByUserId`) REFERENCES `User`(`login`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sub` ADD CONSTRAINT `Sub_createdByUserId_fkey` FOREIGN KEY (`createdByUserId`) REFERENCES `User`(`login`) ON DELETE RESTRICT ON UPDATE CASCADE;
