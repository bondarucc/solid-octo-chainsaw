-- AlterTable
ALTER TABLE `EntityUpdatedAuditEvent` MODIFY `diff` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `Sub` MODIFY `note` TEXT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `note` TEXT NULL;
