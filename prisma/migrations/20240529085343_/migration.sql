/*
  Warnings:

  - Made the column `productCode` on table `Beverage` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Beverage` MODIFY `productCode` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `ProductCode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
