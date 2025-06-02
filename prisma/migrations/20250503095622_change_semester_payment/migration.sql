/*
  Warnings:

  - A unique constraint covering the columns `[departmentHeadId]` on the table `academic_departments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[applicantName]` on the table `admition_exame_registration` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `departmentId` to the `admition_exame_registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `faculties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `biFile` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gradeDeclarationFile` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseAmount` to the `sudent_semester_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentMonth` to the `sudent_semester_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentYear` to the `sudent_semester_payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `academic_departments` ADD COLUMN `departmentHeadId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `admition_exame_registration` ADD COLUMN `departmentId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `faculties` ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `students` ADD COLUMN `biFile` VARCHAR(191) NOT NULL,
    ADD COLUMN `gradeDeclarationFile` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `sudent_semester_payments` ADD COLUMN `aprovedPayment` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `baseAmount` INTEGER NOT NULL,
    ADD COLUMN `lateFee` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `paymentMonth` INTEGER NOT NULL,
    ADD COLUMN `paymentType` ENUM('RECIPT', 'EXPRESS') NOT NULL DEFAULT 'EXPRESS',
    ADD COLUMN `paymentYear` INTEGER NOT NULL,
    MODIFY `paymentRecipt` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `_DepartmentStaff` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_DepartmentStaff_AB_unique`(`A`, `B`),
    INDEX `_DepartmentStaff_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `academic_departments_departmentHeadId_key` ON `academic_departments`(`departmentHeadId`);

-- CreateIndex
CREATE UNIQUE INDEX `admition_exame_registration_applicantName_key` ON `admition_exame_registration`(`applicantName`);

-- AddForeignKey
ALTER TABLE `academic_departments` ADD CONSTRAINT `academic_departments_departmentHeadId_fkey` FOREIGN KEY (`departmentHeadId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `admition_exame_registration` ADD CONSTRAINT `admition_exame_registration_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `academic_departments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DepartmentStaff` ADD CONSTRAINT `_DepartmentStaff_A_fkey` FOREIGN KEY (`A`) REFERENCES `academic_departments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DepartmentStaff` ADD CONSTRAINT `_DepartmentStaff_B_fkey` FOREIGN KEY (`B`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
