/*
  Warnings:

  - You are about to drop the column `benefitId` on the `Membership` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Membership` DROP FOREIGN KEY `Membership_benefitId_fkey`;

-- AlterTable
ALTER TABLE `Membership` DROP COLUMN `benefitId`;

-- CreateTable
CREATE TABLE `MembershipBenefit` (
    `benefitId` INTEGER NOT NULL,
    `membershipId` INTEGER NOT NULL,

    PRIMARY KEY (`benefitId`, `membershipId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MembershipBenefit` ADD CONSTRAINT `MembershipBenefit_benefitId_fkey` FOREIGN KEY (`benefitId`) REFERENCES `Benefit`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MembershipBenefit` ADD CONSTRAINT `MembershipBenefit_membershipId_fkey` FOREIGN KEY (`membershipId`) REFERENCES `Membership`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
