export const generatePassword = (length: number = 12): string => {
   const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
   let password = "";
   for (let i = 0; i < length; i++) {
     const randomIndex = Math.floor(Math.random() * charset.length);
     password += charset[randomIndex];
   }
   return password;
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