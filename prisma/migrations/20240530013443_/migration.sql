/*
  Warnings:

  - You are about to drop the column `productCodeId` on the `Beverage` table. All the data in the column will be lost.
  - You are about to drop the `Dessert` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductCode` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `menuId` to the `Beverage` table without a default value. This is not possible if the table is not empty.
  - Made the column `notice` on table `Beverage` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category` on table `Beverage` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Beverage` DROP FOREIGN KEY `Beverage_productCodeId_fkey`;

-- AlterTable
ALTER TABLE `Beverage` DROP COLUMN `productCodeId`,
    ADD COLUMN `menuId` INTEGER NOT NULL,
    MODIFY `name_en` VARCHAR(191) NULL,
    MODIFY `notice` VARCHAR(191) NOT NULL,
    MODIFY `category` ENUM('FIZZIO', 'ESPRESSO', 'COLDBREW', 'BLONDE', 'DECAF', 'RESERVE_ESPRESSO', 'RESERVE_DRIP', 'TEAVANA', 'REFRESHERS', 'BLENDED', 'BREWED', 'OTHERS', 'TRENTA', 'TOGOBAG', 'RTD', 'SPECIAL_STORE') NOT NULL DEFAULT 'OTHERS';

-- DropTable
DROP TABLE `Dessert`;

-- DropTable
DROP TABLE `ProductCode`;

-- CreateTable
CREATE TABLE `Menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Option` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `name_en` VARCHAR(191) NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BeverageOption` (
    `beverageId` INTEGER NOT NULL,
    `optionId` INTEGER NOT NULL,

    PRIMARY KEY (`beverageId`, `optionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Food` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `menuId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `name_en` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `notice` VARCHAR(191) NOT NULL,
    `imgUrl` VARCHAR(191) NOT NULL,
    `category` ENUM('BREAD', 'CAKE_DESERT', 'SANDWICH_SALAD', 'HOTFOOD', 'FRUIT_YOGURT', 'SNACK', 'ICECREAM', 'SPECIAL_STORE', 'STADIUM') NOT NULL DEFAULT 'BREAD',
    `isBest` BOOLEAN NULL DEFAULT false,
    `isNew` BOOLEAN NULL DEFAULT false,
    `isRecommended` BOOLEAN NULL DEFAULT false,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodOption` (
    `foodId` INTEGER NOT NULL,
    `optionId` INTEGER NOT NULL,

    PRIMARY KEY (`foodId`, `optionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Beverage` ADD CONSTRAINT `Beverage_menuId_fkey` FOREIGN KEY (`menuId`) REFERENCES `Menu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BeverageOption` ADD CONSTRAINT `BeverageOption_beverageId_fkey` FOREIGN KEY (`beverageId`) REFERENCES `Beverage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BeverageOption` ADD CONSTRAINT `BeverageOption_optionId_fkey` FOREIGN KEY (`optionId`) REFERENCES `Option`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Food` ADD CONSTRAINT `Food_menuId_fkey` FOREIGN KEY (`menuId`) REFERENCES `Menu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodOption` ADD CONSTRAINT `FoodOption_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `Food`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodOption` ADD CONSTRAINT `FoodOption_optionId_fkey` FOREIGN KEY (`optionId`) REFERENCES `Option`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
