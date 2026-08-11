/*
  Warnings:

  - Added the required column `entityType` to the `EntityUpdatedAuditEvent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `EntityUpdatedAuditEvent` ADD COLUMN `entityType` ENUM('SUB', 'USER') NOT NULL;
