import { prisma } from "../shared/prisma";

export const generatePassword = (length: number = 12): string => {
   const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
   let password = "";
   for (let i = 0; i < length; i++) {
     const randomIndex = Math.floor(Math.random() * charset.length);
     password += charset[randomIndex];
   }
   return password;
 };
export const generateUniqueStudentNumber = async (): Promise<string> => {
   let unique = false;
   let studentNumber = "";
   const year = new Date().getFullYear();

   while (!unique) {
      const randomPart = Math.floor(1000 + Math.random() * 9000);
      studentNumber = `${year}${randomPart}`;

      const existing = await prisma.student.findUnique({
         where: { studentId: studentNumber },
         select: { id: true }
      });

      if (!existing) unique = true;
   }

   return studentNumber;
};
export const generateUniqueFacultyId = async (): Promise<string> => {
   let unique = false;
   let facultyId = "";
   const year = new Date().getFullYear();

   while (!unique) {
      const randomPart = Math.floor(1000 + Math.random() * 9000);
      facultyId = `FAC-${year}-${randomPart}`;

      const existing = await prisma.faculty.findUnique({
         where: { facultyId },
         select: { id: true }
      });

      if (!existing) unique = true;
   }

   return facultyId;
};

 interface StudentMarks {
  continuousAssessments: number[];  // List of continuous assessment scores
  frequencyExam: number;            // Frequency exam score
}

// Type for the offered course, including the dispensa (dispense) grade
interface OfferedCourse {
  suspendGrade: number;  // Minimum grade required to dispense the final exam
}
export function isDispensedFromFinalExam(studentMarks: StudentMarks, offeredCourse: OfferedCourse): boolean {
  
  const totalContinuousAssessments = studentMarks.continuousAssessments.reduce((acc, mark) => acc + mark, 0);

  const totalScore = totalContinuousAssessments + studentMarks.frequencyExam;

  if (totalScore >= offeredCourse.suspendGrade) {
    return true;  
  } else {
    return false;
  }
}