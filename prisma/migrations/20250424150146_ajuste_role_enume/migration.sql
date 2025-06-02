/*
  Warnings:

  - The values [finances] on the enum `users_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('super_admin', 'admin', 'student', 'faculty', 'accountant', 'department_head', 'staff') NOT NULL DEFAULT 'super_admin';
