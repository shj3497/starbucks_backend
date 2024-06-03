/*
  Warnings:

  - Made the column `productCodeId` on table `Beverage` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Beverage` DROP FOREIGN KEY `Beverage_productCodeId_fkey`;

-- AlterTable
ALTER TABLE `Beverage` MODIFY `productCodeId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Beverage` ADD CONSTRAINT `Beverage_productCodeId_fkey` FOREIGN KEY (`productCodeId`) REFERENCES `ProductCode`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
