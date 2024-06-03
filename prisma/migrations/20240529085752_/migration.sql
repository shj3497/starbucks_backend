/*
  Warnings:

  - You are about to drop the column `productCode` on the `Beverage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Beverage` DROP COLUMN `productCode`,
    ADD COLUMN `productCodeId` INTEGER NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE `Beverage` ADD CONSTRAINT `Beverage_productCodeId_fkey` FOREIGN KEY (`productCodeId`) REFERENCES `ProductCode`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
