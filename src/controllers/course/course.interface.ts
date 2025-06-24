export interface ICourseProps {
  title: string;
  code: string;
  credits: number;
  durationInYears: number;
  academicDepartmentId: string;
  preRequisiteCourses?: [
    {
      courseId: string;
      isDeleted?: boolean | null;
    }
  ];
}
