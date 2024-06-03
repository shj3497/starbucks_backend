/*
  Warnings:

  - You are about to drop the column `abridgedTitle` on the `Benefit` table. All the data in the column will be lost.
  - Added the required column `shortTitle` to the `Benefit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Benefit` DROP COLUMN `abridgedTitle`,
    ADD COLUMN `shortTitle` VARCHAR(191) NOT NULL;
