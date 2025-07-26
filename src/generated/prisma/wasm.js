
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  avatar: 'avatar',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AcademicSemesterScalarFieldEnum = {
  id: 'id',
  title: 'title',
  year: 'year',
  code: 'code',
  startMonth: 'startMonth',
  endMonth: 'endMonth',
  isCurrent: 'isCurrent',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AcademicFacultyScalarFieldEnum = {
  id: 'id',
  title: 'title',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AcademicDepartmentScalarFieldEnum = {
  id: 'id',
  title: 'title',
  academicFacultyId: 'academicFacultyId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  departmentHeadId: 'departmentHeadId'
};

exports.Prisma.StudentScalarFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  firstName: 'firstName',
  middleName: 'middleName',
  lastName: 'lastName',
  profileImage: 'profileImage',
  email: 'email',
  contactNo: 'contactNo',
  gender: 'gender',
  isWoker: 'isWoker',
  shift: 'shift',
  yearLevel: 'yearLevel',
  isActive: 'isActive',
  password: 'password',
  gradeDeclarationFile: 'gradeDeclarationFile',
  biFile: 'biFile',
  presentAddress: 'presentAddress',
  permanentAddress: 'permanentAddress',
  academicSemesterId: 'academicSemesterId',
  academicFacultyId: 'academicFacultyId',
  academicDepartmentId: 'academicDepartmentId',
  admissionRegistrationId: 'admissionRegistrationId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FacultyScalarFieldEnum = {
  id: 'id',
  facultyId: 'facultyId',
  firstName: 'firstName',
  middleName: 'middleName',
  lastName: 'lastName',
  profileImage: 'profileImage',
  email: 'email',
  contactNo: 'contactNo',
  shift: 'shift',
  gender: 'gender',
  designation: 'designation',
  password: 'password',
  academicFacultyId: 'academicFacultyId',
  academicDepartmentId: 'academicDepartmentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BuildingScalarFieldEnum = {
  id: 'id',
  title: 'title',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RoomScalarFieldEnum = {
  id: 'id',
  roomNumber: 'roomNumber',
  floor: 'floor',
  buildingId: 'buildingId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CourseScalarFieldEnum = {
  id: 'id',
  title: 'title',
  code: 'code',
  durationInYears: 'durationInYears',
  yearLevel: 'yearLevel',
  shift: 'shift',
  academicDepartmentId: 'academicDepartmentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CourseToPreRequisiteScalarFieldEnum = {
  courseId: 'courseId',
  preRequisiteId: 'preRequisiteId'
};

exports.Prisma.CourseFacultyScalarFieldEnum = {
  courseId: 'courseId',
  facultyId: 'facultyId'
};

exports.Prisma.SemesterRegistrationScalarFieldEnum = {
  id: 'id',
  startDate: 'startDate',
  endDate: 'endDate',
  status: 'status',
  createdAt: 'createdAt',
  updateAt: 'updateAt',
  academicSemesterId: 'academicSemesterId'
};

exports.Prisma.AdmitionExameRegistrationScalarFieldEnum = {
  id: 'id',
  applicantName: 'applicantName',
  paymentRecipt: 'paymentRecipt',
  status: 'status',
  document: 'document',
  paymentAmoute: 'paymentAmoute',
  aprovePayment: 'aprovePayment',
  exameResults: 'exameResults',
  passed: 'passed',
  faseId: 'faseId',
  exameDate: 'exameDate',
  rejectionReason: 'rejectionReason',
  phoneNumber: 'phoneNumber',
  email: 'email',
  createdAt: 'createdAt',
  updateAt: 'updateAt',
  departmentId: 'departmentId'
};

exports.Prisma.AdmitionExamePriceScalarFieldEnum = {
  id: 'id',
  academicFacultyId: 'academicFacultyId',
  price: 'price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AdmitionExamePeriodScalarFieldEnum = {
  id: 'id',
  startDate: 'startDate',
  endDate: 'endDate',
  academicFacultyId: 'academicFacultyId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ExameFaseScalarFieldEnum = {
  id: 'id',
  name: 'name',
  ordem: 'ordem',
  startDate: 'startDate',
  endDate: 'endDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OfferedCourseScalarFieldEnum = {
  id: 'id',
  academicDepartmentId: 'academicDepartmentId',
  courseId: 'courseId',
  semesterRegistrationId: 'semesterRegistrationId',
  suspendGrade: 'suspendGrade'
};

exports.Prisma.OfferedCourseSectionScalarFieldEnum = {
  id: 'id',
  title: 'title',
  maxCapacity: 'maxCapacity',
  currentlyEnrolledStudent: 'currentlyEnrolledStudent',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  semesterRegistrationId: 'semesterRegistrationId',
  offeredCourseId: 'offeredCourseId'
};

exports.Prisma.OfferedCourseClassScheduleScalarFieldEnum = {
  id: 'id',
  startTime: 'startTime',
  endTime: 'endTime',
  dayOfWeek: 'dayOfWeek',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  offeredCourseSectionId: 'offeredCourseSectionId',
  semesterRegistrationId: 'semesterRegistrationId',
  roomId: 'roomId',
  facultyId: 'facultyId'
};

exports.Prisma.StudentSemesterRegistrationScalarFieldEnum = {
  id: 'id',
  isConfirmed: 'isConfirmed',
  totalCreditsTaken: 'totalCreditsTaken',
  paymentRecipt: 'paymentRecipt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  studentId: 'studentId',
  semesterRegistrationId: 'semesterRegistrationId'
};

exports.Prisma.StudentSemesterRegistrationCourseScalarFieldEnum = {
  semesterRegistrationId: 'semesterRegistrationId',
  studentId: 'studentId',
  offeredCourseId: 'offeredCourseId',
  offeredCourseSectionId: 'offeredCourseSectionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StudentEnrolledCourseScalarFieldEnum = {
  id: 'id',
  grade: 'grade',
  point: 'point',
  totalMarks: 'totalMarks',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  studentId: 'studentId',
  academicSemesterId: 'academicSemesterId',
  courseId: 'courseId'
};

exports.Prisma.StudentEnrolledCourseMarkScalarFieldEnum = {
  id: 'id',
  examType: 'examType',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  studentId: 'studentId',
  studentEnrolledCourseId: 'studentEnrolledCourseId',
  academicSemesterId: 'academicSemesterId',
  continuousAssessments: 'continuousAssessments',
  frequencyExam: 'frequencyExam',
  finalExam: 'finalExam',
  resourceExam: 'resourceExam',
  specialExam: 'specialExam',
  recoveryExam: 'recoveryExam',
  totalMarks: 'totalMarks',
  grade: 'grade'
};

exports.Prisma.CourseDisciplineScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  disciplineId: 'disciplineId',
  semesterId: 'semesterId',
  credits: 'credits'
};

exports.Prisma.CoursePricingScalarFieldEnum = {
  id: 'id',
  price: 'price',
  courseId: 'courseId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DisciplineScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  description: 'description',
  credits: 'credits',
  minimumGradeToDismiss: 'minimumGradeToDismiss',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StudentSemesterPaymentScalarFieldEnum = {
  id: 'id',
  paymentRecipt: 'paymentRecipt',
  totalPayment: 'totalPayment',
  baseAmount: 'baseAmount',
  lateFee: 'lateFee',
  aprovedPayment: 'aprovedPayment',
  paymentType: 'paymentType',
  paymentStatus: 'paymentStatus',
  paymentMonth: 'paymentMonth',
  paymentYear: 'paymentYear',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  studentId: 'studentId',
  academicSemesterId: 'academicSemesterId'
};

exports.Prisma.StudentAcademicInfoScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  studentId: 'studentId',
  totalCompletedCredits: 'totalCompletedCredits',
  cgpa: 'cgpa'
};

exports.Prisma.EventsScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  thumbnail: 'thumbnail',
  color: 'color',
  location: 'location',
  mandatory: 'mandatory',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UsersOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  avatar: 'avatar'
};

exports.Prisma.AcademicSemesterOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  year: 'year',
  code: 'code',
  startMonth: 'startMonth',
  endMonth: 'endMonth'
};

exports.Prisma.AcademicFacultyOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title'
};

exports.Prisma.AcademicDepartmentOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  academicFacultyId: 'academicFacultyId',
  departmentHeadId: 'departmentHeadId'
};

exports.Prisma.StudentOrderByRelevanceFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  firstName: 'firstName',
  middleName: 'middleName',
  lastName: 'lastName',
  profileImage: 'profileImage',
  email: 'email',
  contactNo: 'contactNo',
  gender: 'gender',
  password: 'password',
  gradeDeclarationFile: 'gradeDeclarationFile',
  biFile: 'biFile',
  presentAddress: 'presentAddress',
  permanentAddress: 'permanentAddress',
  academicSemesterId: 'academicSemesterId',
  academicFacultyId: 'academicFacultyId',
  academicDepartmentId: 'academicDepartmentId',
  admissionRegistrationId: 'admissionRegistrationId'
};

exports.Prisma.FacultyOrderByRelevanceFieldEnum = {
  id: 'id',
  facultyId: 'facultyId',
  firstName: 'firstName',
  middleName: 'middleName',
  lastName: 'lastName',
  profileImage: 'profileImage',
  email: 'email',
  contactNo: 'contactNo',
  gender: 'gender',
  designation: 'designation',
  password: 'password',
  academicFacultyId: 'academicFacultyId',
  academicDepartmentId: 'academicDepartmentId'
};

exports.Prisma.BuildingOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title'
};

exports.Prisma.RoomOrderByRelevanceFieldEnum = {
  id: 'id',
  roomNumber: 'roomNumber',
  floor: 'floor',
  buildingId: 'buildingId'
};

exports.Prisma.CourseOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  code: 'code',
  academicDepartmentId: 'academicDepartmentId'
};

exports.Prisma.CourseToPreRequisiteOrderByRelevanceFieldEnum = {
  courseId: 'courseId',
  preRequisiteId: 'preRequisiteId'
};

exports.Prisma.CourseFacultyOrderByRelevanceFieldEnum = {
  courseId: 'courseId',
  facultyId: 'facultyId'
};

exports.Prisma.SemesterRegistrationOrderByRelevanceFieldEnum = {
  id: 'id',
  academicSemesterId: 'academicSemesterId'
};

exports.Prisma.AdmitionExameRegistrationOrderByRelevanceFieldEnum = {
  id: 'id',
  applicantName: 'applicantName',
  paymentRecipt: 'paymentRecipt',
  document: 'document',
  faseId: 'faseId',
  rejectionReason: 'rejectionReason',
  phoneNumber: 'phoneNumber',
  email: 'email',
  departmentId: 'departmentId'
};

exports.Prisma.AdmitionExamePriceOrderByRelevanceFieldEnum = {
  id: 'id',
  academicFacultyId: 'academicFacultyId'
};

exports.Prisma.AdmitionExamePeriodOrderByRelevanceFieldEnum = {
  id: 'id',
  academicFacultyId: 'academicFacultyId'
};

exports.Prisma.ExameFaseOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.OfferedCourseOrderByRelevanceFieldEnum = {
  id: 'id',
  academicDepartmentId: 'academicDepartmentId',
  courseId: 'courseId',
  semesterRegistrationId: 'semesterRegistrationId'
};

exports.Prisma.OfferedCourseSectionOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  semesterRegistrationId: 'semesterRegistrationId',
  offeredCourseId: 'offeredCourseId'
};

exports.Prisma.OfferedCourseClassScheduleOrderByRelevanceFieldEnum = {
  id: 'id',
  startTime: 'startTime',
  endTime: 'endTime',
  offeredCourseSectionId: 'offeredCourseSectionId',
  semesterRegistrationId: 'semesterRegistrationId',
  roomId: 'roomId',
  facultyId: 'facultyId'
};

exports.Prisma.StudentSemesterRegistrationOrderByRelevanceFieldEnum = {
  id: 'id',
  paymentRecipt: 'paymentRecipt',
  studentId: 'studentId',
  semesterRegistrationId: 'semesterRegistrationId'
};

exports.Prisma.StudentSemesterRegistrationCourseOrderByRelevanceFieldEnum = {
  semesterRegistrationId: 'semesterRegistrationId',
  studentId: 'studentId',
  offeredCourseId: 'offeredCourseId',
  offeredCourseSectionId: 'offeredCourseSectionId'
};

exports.Prisma.StudentEnrolledCourseOrderByRelevanceFieldEnum = {
  id: 'id',
  grade: 'grade',
  studentId: 'studentId',
  academicSemesterId: 'academicSemesterId',
  courseId: 'courseId'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.StudentEnrolledCourseMarkOrderByRelevanceFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  studentEnrolledCourseId: 'studentEnrolledCourseId',
  academicSemesterId: 'academicSemesterId'
};

exports.Prisma.CourseDisciplineOrderByRelevanceFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  disciplineId: 'disciplineId',
  semesterId: 'semesterId'
};

exports.Prisma.CoursePricingOrderByRelevanceFieldEnum = {
  id: 'id',
  courseId: 'courseId'
};

exports.Prisma.DisciplineOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  description: 'description'
};

exports.Prisma.StudentSemesterPaymentOrderByRelevanceFieldEnum = {
  id: 'id',
  paymentRecipt: 'paymentRecipt',
  studentId: 'studentId',
  academicSemesterId: 'academicSemesterId'
};

exports.Prisma.StudentAcademicInfoOrderByRelevanceFieldEnum = {
  id: 'id',
  studentId: 'studentId'
};

exports.Prisma.EventsOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  thumbnail: 'thumbnail',
  color: 'color'
};
exports.UserRole = exports.$Enums.UserRole = {
  super_admin: 'super_admin',
  admin: 'admin',
  student: 'student',
  editor: 'editor',
  faculty: 'faculty',
  accountant: 'accountant',
  department_head: 'department_head',
  staff: 'staff'
};

exports.Shift = exports.$Enums.Shift = {
  MORNING: 'MORNING',
  AFTERNOON: 'AFTERNOON',
  EVENING: 'EVENING'
};

exports.YearLevel = exports.$Enums.YearLevel = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THIRD: 'THIRD',
  FOURTH: 'FOURTH',
  FIFTH: 'FIFTH'
};

exports.SemesterRegistrationStatus = exports.$Enums.SemesterRegistrationStatus = {
  UPCOMING: 'UPCOMING',
  ONGOING: 'ONGOING',
  ENDED: 'ENDED'
};

exports.Status = exports.$Enums.Status = {
  APROVE: 'APROVE',
  PENDING: 'PENDING',
  DENIDE: 'DENIDE'
};

exports.WeekDays = exports.$Enums.WeekDays = {
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY',
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY'
};

exports.StudentEnrolledCourseStatus = exports.$Enums.StudentEnrolledCourseStatus = {
  ONGOING: 'ONGOING',
  COMPLETED: 'COMPLETED',
  WITHDRAWN: 'WITHDRAWN'
};

exports.ExamType = exports.$Enums.ExamType = {
  MIDTERM: 'MIDTERM',
  FINAL: 'FINAL'
};

exports.PAYMENTTYPE = exports.$Enums.PAYMENTTYPE = {
  RECIPT: 'RECIPT',
  EXPRESS: 'EXPRESS'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  NOT_PAID: 'NOT_PAID',
  FULL_PAID: 'FULL_PAID'
};

exports.Prisma.ModelName = {
  Users: 'Users',
  AcademicSemester: 'AcademicSemester',
  AcademicFaculty: 'AcademicFaculty',
  AcademicDepartment: 'AcademicDepartment',
  Student: 'Student',
  Faculty: 'Faculty',
  Building: 'Building',
  Room: 'Room',
  Course: 'Course',
  CourseToPreRequisite: 'CourseToPreRequisite',
  CourseFaculty: 'CourseFaculty',
  SemesterRegistration: 'SemesterRegistration',
  AdmitionExameRegistration: 'AdmitionExameRegistration',
  AdmitionExamePrice: 'AdmitionExamePrice',
  AdmitionExamePeriod: 'AdmitionExamePeriod',
  ExameFase: 'ExameFase',
  OfferedCourse: 'OfferedCourse',
  OfferedCourseSection: 'OfferedCourseSection',
  OfferedCourseClassSchedule: 'OfferedCourseClassSchedule',
  StudentSemesterRegistration: 'StudentSemesterRegistration',
  StudentSemesterRegistrationCourse: 'StudentSemesterRegistrationCourse',
  StudentEnrolledCourse: 'StudentEnrolledCourse',
  StudentEnrolledCourseMark: 'StudentEnrolledCourseMark',
  CourseDiscipline: 'CourseDiscipline',
  CoursePricing: 'CoursePricing',
  Discipline: 'Discipline',
  StudentSemesterPayment: 'StudentSemesterPayment',
  StudentAcademicInfo: 'StudentAcademicInfo',
  Events: 'Events'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
