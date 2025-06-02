import express from 'express';
import { AcademicDepartmentRoutes } from '../controllers/academicDepartment/academicDepartment.routes';
import { AcademicAdmitionExameRoutes } from '../controllers/admitionExame/admitionExame.service.routes';
import { AuthRoutes } from '../controllers/auth/auth.routes';
import { UsersRoutes } from '../controllers/users/user.routes';
import { AcademicFacultyRoutes } from '../controllers/academicFaculty/academicFaculty.route';
import { AcademicSemesterRoutes } from '../controllers/academicSemester/academicSemester.route';
import { StudentRoutes } from '../controllers/student/student.route';
import { SemesterRegistrationRoutes } from '../controllers/semesterRegistration/semesterRegistration.route';
import { BuildingRoutes } from '../controllers/building/building.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semester',
    routes: AcademicSemesterRoutes,
  },
  {
    path: '/academic-department',
    routes: AcademicDepartmentRoutes,
  },
  {
    path: '/admission-exame',
    routes: AcademicAdmitionExameRoutes,
  },
  {
    path: '/auth',
    routes: AuthRoutes,
  },
  {
    path: '/users',
    routes: UsersRoutes,
  },
  {
    path: '/academic-faculty',
    routes: AcademicFacultyRoutes,
  },
  // {
  //   path: '/faculty',
  //   routes: FacultyRoutes,
  // },
  {
    path: '/student',
    routes: StudentRoutes,
  },
  {
    path: '/building',
    routes: BuildingRoutes,
  },
  // {
  //   path: '/room',
  //   routes: RoomRoutes,
  // },
  // {
  //   path: '/course',
  //   routes: CourseRoutes,
  // },
  {
    path: '/semester-registration',
    routes: SemesterRegistrationRoutes,
  },
  // {
  //   path: '/offered-course',
  //   routes: OfferedCourseRoutes,
  // },
  // {
  //   path: '/offered-course-section',
  //   routes: OfferedCourseSectionRoutes,
  // },
  // {
  //   path: '/offered-course-class-schedule',
  //   routes: OfferedCourseClassScheduleRoutes,
  // },
  // {
  //   path: '/student-enrolled-course-mark',
  //   routes: StudentEnrolledCourseMarkRoutes,
  // },
  // {
  //   path: '/student-enrolled-course',
  //   routes: StudentEnrolledCourseRoutes,
  // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));
export default router;
