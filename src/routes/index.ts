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
import { CourseRoutes } from '../controllers/course/course.route';
import { OfferedCourseRoutes } from '../controllers/offeredCourse/offeredCourse.route';
import { OfferedCourseClassScheduleRoutes } from '../controllers/offeredCourseClassSchedule/offeredCourseClassSchedule.route';
import { StudentEnrolledCourseMarkRoutes } from '../controllers/studentEnrolledCourseMark/studentEnrolledCourse.route';
import { StudentEnrolledCourseRoutes } from '../controllers/studentEnrolledCourse/studentEnrolledCourse.route';
import { OfferedCourseSectionRoutes } from '../controllers/offeredCourseSection/offeredCourseSection.route';
import { RoomRoutes } from '../controllers/room/room.route';
import { DisciplineRoutes } from '../controllers/discipline/discipline.routes';
import { EventsRoutes } from '../controllers/events/event.routes';
import { CoursePricingRoutes } from '../controllers/coursePricing/coursePricing.routes';

const router = express.Router();

const moduleRoutes = [
   {
    path: '/users',
    routes: UsersRoutes,
  },
    {
    path: '/academic-faculty',
    routes: AcademicFacultyRoutes,
  },
  {
    path: '/academic-semester',
    routes: AcademicSemesterRoutes,
  },
  {
    path: '/academic-department',
    routes: AcademicDepartmentRoutes,
  },
  {
    path: '/course',
    routes: CourseRoutes,
  },
  {
    path: '/course-price',
    routes: CoursePricingRoutes,
  },
  {
    path: '/discipline',
    routes: DisciplineRoutes,
  },
  {
    path: '/admission-exame',
    routes: AcademicAdmitionExameRoutes,
  },
  {
    path: '/auth',
    routes: AuthRoutes,
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
  {
    path: '/room',
    routes: RoomRoutes,
  },
  {
    path: '/semester-registration',
    routes: SemesterRegistrationRoutes,
  },
  {
    path: '/offered-course',
    routes: OfferedCourseRoutes,
  },
  {
    path: '/offered-course-section',
    routes: OfferedCourseSectionRoutes,
  },
  {
    path: '/offered-course-class-schedule',
    routes: OfferedCourseClassScheduleRoutes,
  },
  {
    path: '/student-enrolled-course-mark',
    routes: StudentEnrolledCourseMarkRoutes,
  },
  {
    path: '/student-enrolled-course',
    routes: StudentEnrolledCourseRoutes,
  },
  {
    path: '/events',
    routes: EventsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));
export default router;
