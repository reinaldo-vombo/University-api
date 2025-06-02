-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `role` ENUM('super_admin', 'admin', 'student', 'faculty', 'finances') NOT NULL DEFAULT 'admin',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `academic_semesters` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `startMonth` VARCHAR(191) NOT NULL,
    `endMonth` VARCHAR(191) NOT NULL,
    `isCurrent` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `academic_faculties` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `academic_departments` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `academicFacultyId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `academic_departments_academicFacultyId_key`(`academicFacultyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `students` (
    `id` VARCHAR(191) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `middleName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `profileImage` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `contactNo` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NOT NULL,
    `isWoker` BOOLEAN NOT NULL DEFAULT false,
    `shift` ENUM('MANHA', 'TARDE', 'NOITE') NOT NULL DEFAULT 'MANHA',
    `presentAddress` VARCHAR(191) NOT NULL,
    `permanentAddress` VARCHAR(191) NULL,
    `academicSemesterId` VARCHAR(191) NOT NULL,
    `academicFacultyId` VARCHAR(191) NOT NULL,
    `academicDepartmentId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `admissionRegistrationId` VARCHAR(191) NULL,

    UNIQUE INDEX `students_studentId_key`(`studentId`),
    UNIQUE INDEX `students_academicSemesterId_key`(`academicSemesterId`),
    UNIQUE INDEX `students_academicFacultyId_key`(`academicFacultyId`),
    UNIQUE INDEX `students_academicDepartmentId_key`(`academicDepartmentId`),
    UNIQUE INDEX `students_admissionRegistrationId_key`(`admissionRegistrationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `faculties` (
    `id` VARCHAR(191) NOT NULL,
    `facultyId` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `middleName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `profileImage` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `contactNo` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `academicFacultyId` VARCHAR(191) NOT NULL,
    `academicDepartmentId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `faculties_facultyId_key`(`facultyId`),
    UNIQUE INDEX `faculties_academicFacultyId_key`(`academicFacultyId`),
    UNIQUE INDEX `faculties_academicDepartmentId_key`(`academicDepartmentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `buildings` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rooms` (
    `id` VARCHAR(191) NOT NULL,
    `roomNumber` VARCHAR(191) NOT NULL,
    `floor` VARCHAR(191) NOT NULL,
    `buildingId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `courses` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `credits` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CourseToPreRequisite` (
    `courseId` VARCHAR(191) NOT NULL,
    `preRequisiteId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`courseId`, `preRequisiteId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course_faculties` (
    `courseId` VARCHAR(191) NOT NULL,
    `facultyId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`courseId`, `facultyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `semester_registrations` (
    `id` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `status` ENUM('UPCOMING', 'ONGOING', 'ENDED') NULL DEFAULT 'UPCOMING',
    `paymentRecipt` VARCHAR(191) NOT NULL,
    `totalPayment` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `academicSemesterId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admition_exame_registration` (
    `id` VARCHAR(191) NOT NULL,
    `applicantName` VARCHAR(191) NOT NULL,
    `paymentRecipt` VARCHAR(191) NOT NULL,
    `document` VARCHAR(191) NOT NULL,
    `paymentAmoute` INTEGER NULL,
    `aprovePayment` BOOLEAN NULL DEFAULT false,
    `exameResults` INTEGER NULL,
    `exameDate` DATETIME(3) NOT NULL,
    `status` ENUM('APROVE', 'PENDING', 'DENIDE') NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offered_courses` (
    `id` VARCHAR(191) NOT NULL,
    `academicDepartmentId` VARCHAR(191) NOT NULL,
    `courseId` VARCHAR(191) NOT NULL,
    `semesterRegistrationId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offered_course_sections` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `maxCapacity` INTEGER NOT NULL DEFAULT 0,
    `currentlyEnrolledStudent` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `semesterRegistrationId` VARCHAR(191) NOT NULL,
    `offeredCourseId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offered_course_class_schedules` (
    `id` VARCHAR(191) NOT NULL,
    `startTime` VARCHAR(191) NOT NULL,
    `endTime` VARCHAR(191) NOT NULL,
    `dayOfWeek` ENUM('SATURDAY', 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY') NOT NULL DEFAULT 'SATURDAY',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `offeredCourseSectionId` VARCHAR(191) NOT NULL,
    `semesterRegistrationId` VARCHAR(191) NOT NULL,
    `roomId` VARCHAR(191) NOT NULL,
    `facultyId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_semester_registrations` (
    `id` VARCHAR(191) NOT NULL,
    `isConfirmed` BOOLEAN NULL DEFAULT false,
    `totalCreditsTaken` INTEGER NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `semesterRegistrationId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_semester_registration_courses` (
    `semesterRegistrationId` VARCHAR(191) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `offeredCourseId` VARCHAR(191) NOT NULL,
    `offeredCourseSectionId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`semesterRegistrationId`, `studentId`, `offeredCourseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_enrolled_courses` (
    `id` VARCHAR(191) NOT NULL,
    `grade` VARCHAR(191) NULL,
    `point` DOUBLE NULL DEFAULT 0,
    `totalMarks` INTEGER NULL DEFAULT 0,
    `status` ENUM('ONGOING', 'COMPLETED', 'WITHDRAWN') NULL DEFAULT 'ONGOING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `academicSemesterId` VARCHAR(191) NOT NULL,
    `courseId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_enrolled_course_marks` (
    `id` VARCHAR(191) NOT NULL,
    `examType` ENUM('MIDTERM', 'FINAL') NULL DEFAULT 'MIDTERM',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `studentEnrolledCourseId` VARCHAR(191) NOT NULL,
    `academicSemesterId` VARCHAR(191) NOT NULL,
    `exam1` DOUBLE NOT NULL DEFAULT 0,
    `exam2` DOUBLE NOT NULL DEFAULT 0,
    `exam3` DOUBLE NOT NULL DEFAULT 0,
    `exam4` DOUBLE NOT NULL DEFAULT 0,
    `exam5` DOUBLE NOT NULL DEFAULT 0,
    `exam6` DOUBLE NOT NULL DEFAULT 0,
    `finalExam` DOUBLE NOT NULL DEFAULT 0,
    `totalMarks` DOUBLE NOT NULL DEFAULT 0,
    `grade` DOUBLE NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sudent_semester_payments` (
    `id` VARCHAR(191) NOT NULL,
    `paymentRecipt` VARCHAR(191) NOT NULL,
    `totalPayment` INTEGER NOT NULL DEFAULT 0,
    `paymentStatus` ENUM('PENDING', 'NOT_PAID', 'FULL_PAID') NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `academicSemesterId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_academic_infos` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `totalCompletedCredits` INTEGER NULL DEFAULT 0,
    `cgpa` DOUBLE NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `academic_departments` ADD CONSTRAINT `academic_departments_academicFacultyId_fkey` FOREIGN KEY (`academicFacultyId`) REFERENCES `academic_faculties`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_admissionRegistrationId_fkey` FOREIGN KEY (`admissionRegistrationId`) REFERENCES `admition_exame_registration`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_academicDepartmentId_fkey` FOREIGN KEY (`academicDepartmentId`) REFERENCES `academic_departments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_academicFacultyId_fkey` FOREIGN KEY (`academicFacultyId`) REFERENCES `academic_faculties`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_academicSemesterId_fkey` FOREIGN KEY (`academicSemesterId`) REFERENCES `academic_semesters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `faculties` ADD CONSTRAINT `faculties_academicDepartmentId_fkey` FOREIGN KEY (`academicDepartmentId`) REFERENCES `academic_departments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `faculties` ADD CONSTRAINT `faculties_academicFacultyId_fkey` FOREIGN KEY (`academicFacultyId`) REFERENCES `academic_faculties`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rooms` ADD CONSTRAINT `rooms_buildingId_fkey` FOREIGN KEY (`buildingId`) REFERENCES `buildings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CourseToPreRequisite` ADD CONSTRAINT `CourseToPreRequisite_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CourseToPreRequisite` ADD CONSTRAINT `CourseToPreRequisite_preRequisiteId_fkey` FOREIGN KEY (`preRequisiteId`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_faculties` ADD CONSTRAINT `course_faculties_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_faculties` ADD CONSTRAINT `course_faculties_facultyId_fkey` FOREIGN KEY (`facultyId`) REFERENCES `faculties`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `semester_registrations` ADD CONSTRAINT `semester_registrations_academicSemesterId_fkey` FOREIGN KEY (`academicSemesterId`) REFERENCES `academic_semesters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offered_courses` ADD CONSTRAINT `offered_courses_academicDepartmentId_fkey` FOREIGN KEY (`academicDepartmentId`) REFERENCES `academic_departments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offered_courses` ADD CONSTRAINT `offered_courses_semesterRegistrationId_fkey` FOREIGN KEY (`semesterRegistrationId`) REFERENCES `semester_registrations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offered_courses` ADD CONSTRAINT `offered_courses_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offered_course_sections` ADD CONSTRAINT `offered_course_sections_semesterRegistrationId_fkey` FOREIGN KEY (`semesterRegistrationId`) REFERENCES `semester_registrations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offered_course_sections` ADD CONSTRAINT `offered_course_sections_offeredCourseId_fkey` FOREIGN KEY (`offeredCourseId`) REFERENCES `offered_courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offered_course_class_schedules` ADD CONSTRAINT `offered_course_class_schedules_offeredCourseSectionId_fkey` FOREIGN KEY (`offeredCourseSectionId`) REFERENCES `offered_course_sections`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offered_course_class_schedules` ADD CONSTRAINT `offered_course_class_schedules_semesterRegistrationId_fkey` FOREIGN KEY (`semesterRegistrationId`) REFERENCES `semester_registrations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offered_course_class_schedules` ADD CONSTRAINT `offered_course_class_schedules_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offered_course_class_schedules` ADD CONSTRAINT `offered_course_class_schedules_facultyId_fkey` FOREIGN KEY (`facultyId`) REFERENCES `faculties`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_semester_registrations` ADD CONSTRAINT `student_semester_registrations_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_semester_registrations` ADD CONSTRAINT `student_semester_registrations_semesterRegistrationId_fkey` FOREIGN KEY (`semesterRegistrationId`) REFERENCES `semester_registrations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_semester_registration_courses` ADD CONSTRAINT `student_semester_registration_courses_semesterRegistrationI_fkey` FOREIGN KEY (`semesterRegistrationId`) REFERENCES `semester_registrations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_semester_registration_courses` ADD CONSTRAINT `student_semester_registration_courses_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_semester_registration_courses` ADD CONSTRAINT `student_semester_registration_courses_offeredCourseId_fkey` FOREIGN KEY (`offeredCourseId`) REFERENCES `offered_courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_semester_registration_courses` ADD CONSTRAINT `student_semester_registration_courses_offeredCourseSectionI_fkey` FOREIGN KEY (`offeredCourseSectionId`) REFERENCES `offered_course_sections`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_enrolled_courses` ADD CONSTRAINT `student_enrolled_courses_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_enrolled_courses` ADD CONSTRAINT `student_enrolled_courses_academicSemesterId_fkey` FOREIGN KEY (`academicSemesterId`) REFERENCES `academic_semesters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_enrolled_courses` ADD CONSTRAINT `student_enrolled_courses_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_enrolled_course_marks` ADD CONSTRAINT `student_enrolled_course_marks_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_enrolled_course_marks` ADD CONSTRAINT `student_enrolled_course_marks_studentEnrolledCourseId_fkey` FOREIGN KEY (`studentEnrolledCourseId`) REFERENCES `student_enrolled_courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_enrolled_course_marks` ADD CONSTRAINT `student_enrolled_course_marks_academicSemesterId_fkey` FOREIGN KEY (`academicSemesterId`) REFERENCES `academic_semesters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sudent_semester_payments` ADD CONSTRAINT `sudent_semester_payments_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sudent_semester_payments` ADD CONSTRAINT `sudent_semester_payments_academicSemesterId_fkey` FOREIGN KEY (`academicSemesterId`) REFERENCES `academic_semesters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_academic_infos` ADD CONSTRAINT `student_academic_infos_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
