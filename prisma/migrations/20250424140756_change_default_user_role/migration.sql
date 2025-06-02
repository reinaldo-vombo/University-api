-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('super_admin', 'admin', 'student', 'faculty', 'finances') NOT NULL DEFAULT 'super_admin';
