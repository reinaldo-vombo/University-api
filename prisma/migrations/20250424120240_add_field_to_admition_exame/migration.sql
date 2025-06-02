/*
  Warnings:

  - You are about to drop the column `status` on the `admition_exame_registration` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `admition_exame_registration` DROP COLUMN `status`,
    ADD COLUMN `fase` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `passed` BOOLEAN NULL DEFAULT false;
