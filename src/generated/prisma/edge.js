
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
  studentType: 'studentType',
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
  academicFalcultyId: 'academicFalcultyId'
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

exports.Prisma.StudentCarriedCourseScalarFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  disciplineId: 'disciplineId',
  semesterId: 'semesterId',
  shift: 'shift',
  price: 'price',
  status: 'status',
  createdAt: 'createdAt'
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
  paymentId: 'paymentId',
  totalPayment: 'totalPayment',
  baseAmount: 'baseAmount',
  lateFee: 'lateFee',
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

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  paymentRecipt: 'paymentRecipt',
  totalAmount: 'totalAmount',
  approved: 'approved',
  paymentType: 'paymentType',
  status: 'status',
  method: 'method',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentReferenceScalarFieldEnum = {
  id: 'id',
  reference: 'reference',
  code: 'code',
  message: 'message',
  paymentId: 'paymentId',
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
  academicFalcultyId: 'academicFalcultyId'
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

exports.Prisma.StudentCarriedCourseOrderByRelevanceFieldEnum = {
  id: 'id',
  studentId: 'studentId',
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
  paymentId: 'paymentId',
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

exports.Prisma.PaymentOrderByRelevanceFieldEnum = {
  id: 'id',
  paymentRecipt: 'paymentRecipt'
};

exports.Prisma.PaymentReferenceOrderByRelevanceFieldEnum = {
  id: 'id',
  reference: 'reference',
  message: 'message',
  paymentId: 'paymentId'
};
exports.SemesterRegistrationStatus = exports.$Enums.SemesterRegistrationStatus = {
  UPCOMING: 'UPCOMING',
  ONGOING: 'ONGOING',
  ENDED: 'ENDED'
};

exports.Shift = exports.$Enums.Shift = {
  MORNING: 'MORNING',
  AFTERNOON: 'AFTERNOON',
  EVENING: 'EVENING'
};

exports.StudentType = exports.$Enums.StudentType = {
  NORMAL: 'NORMAL',
  CADEIRANTE: 'CADEIRANTE',
  BOLSEIRO: 'BOLSEIRO'
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

exports.CarriedCourseStatus = exports.$Enums.CarriedCourseStatus = {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  DROPPED: 'DROPPED'
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

exports.PAYMENTSTATUS = exports.$Enums.PAYMENTSTATUS = {
  PENDING: 'PENDING',
  NOT_PAID: 'NOT_PAID',
  PAID: 'PAID'
};

exports.YearLevel = exports.$Enums.YearLevel = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THIRD: 'THIRD',
  FOURTH: 'FOURTH',
  FIFTH: 'FIFTH'
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

exports.PAYMENTTYPE = exports.$Enums.PAYMENTTYPE = {
  RECEIPT: 'RECEIPT',
  REFERENCE: 'REFERENCE'
};

exports.PAYMENTMETHOD = exports.$Enums.PAYMENTMETHOD = {
  INVOICE: 'INVOICE',
  EXPRESS: 'EXPRESS'
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
  StudentCarriedCourse: 'StudentCarriedCourse',
  CoursePricing: 'CoursePricing',
  Discipline: 'Discipline',
  StudentSemesterPayment: 'StudentSemesterPayment',
  StudentAcademicInfo: 'StudentAcademicInfo',
  Events: 'Events',
  Payment: 'Payment',
  PaymentReference: 'PaymentReference'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\university\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "E:\\university\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "mysql://root:CI%232024@localhost:3306/university"
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Users {\n  id                 String               @id @default(cuid())\n  name               String\n  email              String               @unique\n  password           String\n  avatar             String?\n  academicDepartment AcademicDepartment?  @relation(\"DepartmentHead\")\n  staffDepartments   AcademicDepartment[] @relation(\"DepartmentStaff\")\n  role               UserRole             @default(super_admin)\n  createdAt          DateTime             @default(now())\n  updatedAt          DateTime             @updatedAt\n\n  @@map(\"users\")\n}\n\nmodel AcademicSemester {\n  id                         String                      @id @default(uuid())\n  title                      String\n  year                       String\n  code                       String\n  startMonth                 String\n  endMonth                   String\n  isCurrent                  Boolean                     @default(false)\n  createdAt                  DateTime                    @default(now())\n  updatedAt                  DateTime                    @updatedAt\n  courseDisciplines          CourseDiscipline[]\n  semesterRegistrations      SemesterRegistration[]\n  students                   Student[]\n  studentEnrolledCourses     StudentEnrolledCourse[]     @relation(name: \"EnrolledCourseSemester\")\n  studentEnrolledCourseMarks StudentEnrolledCourseMark[] @relation(name: \"MarkSemester\")\n  studentSemesterPayments    StudentSemesterPayment[]\n  StudentCarriedCourse       StudentCarriedCourse[]\n\n  @@map(\"academic_semesters\")\n}\n\nmodel AcademicFaculty {\n  id        String   @id @default(uuid())\n  title     String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  academicDepartments AcademicDepartment[]\n  faculties           Faculty[]\n  students            Student[]\n  admitionExame       AdmitionExameRegistration[]\n  AdmitionExamePrice  AdmitionExamePrice[]\n  AdmitionExamePeriod AdmitionExamePeriod[]\n\n  @@map(\"academic_faculties\")\n}\n\nmodel AcademicDepartment {\n  id                String          @id @default(uuid())\n  title             String\n  academicFacultyId String\n  createdAt         DateTime        @default(now())\n  updatedAt         DateTime        @updatedAt\n  academicFaculty   AcademicFaculty @relation(fields: [academicFacultyId], references: [id])\n  faculties         Faculty[]\n  courses           Course[]\n  students          Student[]\n  departmentHeadId  String?         @unique\n  departmentHead    Users?          @relation(\"DepartmentHead\", fields: [departmentHeadId], references: [id])\n  staffMembers      Users[]         @relation(\"DepartmentStaff\")\n\n  offeredCourses OfferedCourse[]\n\n  @@map(\"academic_departments\")\n}\n\nmodel Student {\n  id                      String      @id @default(uuid())\n  studentId               String      @unique\n  studentType             StudentType @default(NORMAL)\n  firstName               String\n  middleName              String?\n  lastName                String\n  profileImage            String?\n  email                   String?\n  contactNo               String?\n  gender                  String\n  isWoker                 Boolean     @default(false)\n  shift                   Shift       @default(MORNING)\n  yearLevel               YearLevel   @default(FIRST)\n  isActive                Boolean     @default(false)\n  password                String\n  gradeDeclarationFile    String\n  biFile                  String\n  presentAddress          String\n  permanentAddress        String?\n  academicSemesterId      String\n  academicFacultyId       String\n  academicDepartmentId    String\n  admissionRegistrationId String?     @unique\n\n  createdAt       DateTime        @default(now())\n  updatedAt       DateTime        @updatedAt\n  academicFaculty AcademicFaculty @relation(fields: [academicFacultyId], references: [id])\n\n  admissionRegistration AdmitionExameRegistration? @relation(fields: [admissionRegistrationId], references: [id])\n  academicDepartment    AcademicDepartment         @relation(fields: [academicDepartmentId], references: [id])\n  academicSemester      AcademicSemester           @relation(fields: [academicSemesterId], references: [id])\n\n  studentSemesterRegistrations       StudentSemesterRegistration[]\n  studentSemesterRegistrationCourses StudentSemesterRegistrationCourse[]\n  studentEnrolledCourses             StudentEnrolledCourse[]\n  studentEnrolledCourseMarks         StudentEnrolledCourseMark[]\n  studentSemesterPayments            StudentSemesterPayment[]\n  studentAcademicInfos               StudentAcademicInfo[]\n  StudentCarriedCourse               StudentCarriedCourse[]\n\n  @@map(\"students\")\n}\n\nmodel Faculty {\n  id                          String                       @id @default(uuid())\n  facultyId                   String                       @unique\n  firstName                   String\n  middleName                  String?\n  lastName                    String\n  profileImage                String?\n  email                       String?\n  contactNo                   String?\n  shift                       Shift                        @default(MORNING)\n  gender                      String\n  designation                 String\n  password                    String\n  academicFacultyId           String                       @unique\n  academicDepartmentId        String                       @unique\n  createdAt                   DateTime                     @default(now())\n  updatedAt                   DateTime                     @updatedAt\n  courses                     CourseFaculty[]\n  academicDepartment          AcademicDepartment           @relation(fields: [academicDepartmentId], references: [id])\n  academicFaculty             AcademicFaculty              @relation(fields: [academicFacultyId], references: [id])\n  offeredCourseClassSchedules OfferedCourseClassSchedule[]\n\n  @@map(\"faculties\")\n}\n\nmodel Building {\n  id        String   @id @default(uuid())\n  title     String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  rooms     Room[]\n\n  @@map(\"buildings\")\n}\n\nmodel Room {\n  id                          String                       @id @default(uuid())\n  roomNumber                  String\n  floor                       String\n  buildingId                  String\n  createdAt                   DateTime                     @default(now())\n  updatedAt                   DateTime                     @updatedAt\n  building                    Building                     @relation(fields: [buildingId], references: [id])\n  offeredCourseClassSchedules OfferedCourseClassSchedule[]\n\n  @@map(\"rooms\")\n}\n\nmodel Course {\n  id                   String                  @id @default(uuid())\n  title                String\n  code                 String\n  durationInYears      Int\n  courseDisciplines    CourseDiscipline[]\n  coursePricing        CoursePricing?\n  yearLevel            YearLevel               @default(FIRST)\n  shift                Shift                   @default(MORNING)\n  academicDepartmentId String\n  academicDepartment   AcademicDepartment      @relation(fields: [academicDepartmentId], references: [id])\n  createdAt            DateTime                @default(now())\n  updatedAt            DateTime                @updatedAt\n  studentCourses       StudentEnrolledCourse[]\n  preRequisite         CourseToPreRequisite[]  @relation(\"CourseToPreRequisite\")\n  preRequisiteFor      CourseToPreRequisite[]  @relation(\"PreRequisiteToCourse\")\n  faculties            CourseFaculty[]\n  offeredCourses       OfferedCourse[]\n\n  @@map(\"courses\")\n}\n\nmodel CourseToPreRequisite {\n  courseId       String\n  preRequisiteId String\n  course         Course @relation(\"CourseToPreRequisite\", fields: [courseId], references: [id])\n  preRequisite   Course @relation(\"PreRequisiteToCourse\", fields: [preRequisiteId], references: [id])\n\n  @@id([courseId, preRequisiteId])\n}\n\nmodel CourseFaculty {\n  courseId  String\n  facultyId String\n  course    Course  @relation(fields: [courseId], references: [id])\n  faculty   Faculty @relation(fields: [facultyId], references: [id])\n\n  @@id([courseId, facultyId])\n  @@map(\"course_faculties\")\n}\n\nmodel SemesterRegistration {\n  id                                 String                              @id @default(uuid())\n  startDate                          DateTime\n  endDate                            DateTime\n  status                             SemesterRegistrationStatus?         @default(UPCOMING)\n  createdAt                          DateTime                            @default(now())\n  updateAt                           DateTime                            @updatedAt\n  academicSemesterId                 String\n  academicSemester                   AcademicSemester                    @relation(fields: [academicSemesterId], references: [id])\n  offeredCourses                     OfferedCourse[]\n  offeredCourseSections              OfferedCourseSection[]\n  offeredCourseClassSchedules        OfferedCourseClassSchedule[]\n  studentSemesterRegistrations       StudentSemesterRegistration[]\n  studentSemesterRegistrationCourses StudentSemesterRegistrationCourse[]\n\n  @@map(\"semester_registrations\")\n}\n\nmodel AdmitionExameRegistration {\n  id              String    @id @default(uuid())\n  applicantName   String    @unique\n  paymentRecipt   String\n  status          Status    @default(PENDING)\n  document        String\n  paymentAmoute   Int?\n  aprovePayment   Boolean?  @default(false)\n  exameResults    Int?\n  passed          Boolean?  @default(false)\n  faseId          String\n  fase            ExameFase @relation(fields: [faseId], references: [id])\n  exameDate       DateTime\n  rejectionReason String?\n  phoneNumber     String\n  email           String\n  createdAt       DateTime  @default(now())\n  updateAt        DateTime  @updatedAt\n\n  academicFalcultyId String\n  academicFalculty   AcademicFaculty @relation(fields: [academicFalcultyId], references: [id])\n  Student            Student?\n\n  @@map(\"admition_exame_registration\")\n}\n\nmodel AdmitionExamePrice {\n  id                String          @id @default(uuid())\n  academicFacultyId String\n  academicFaculty   AcademicFaculty @relation(fields: [academicFacultyId], references: [id])\n  price             Int\n  createdAt         DateTime        @default(now())\n  updatedAt         DateTime        @updatedAt\n}\n\nmodel AdmitionExamePeriod {\n  id                String          @id @default(uuid())\n  startDate         DateTime\n  endDate           DateTime\n  academicFacultyId String\n  academicFaculty   AcademicFaculty @relation(fields: [academicFacultyId], references: [id])\n  createdAt         DateTime        @default(now())\n  updatedAt         DateTime        @updatedAt\n\n  @@map(\"admition_exame_periods\")\n}\n\nmodel ExameFase {\n  id        String   @id @default(uuid())\n  name      String // Ex: \"Fase 1\", \"Fase 2\"\n  ordem     Int\n  startDate DateTime\n  endDate   DateTime\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  registrations AdmitionExameRegistration[]\n}\n\nmodel OfferedCourse {\n  id                                 String                              @id @default(uuid())\n  academicDepartmentId               String\n  academicDepartment                 AcademicDepartment                  @relation(fields: [academicDepartmentId], references: [id])\n  courseId                           String\n  semesterRegistration               SemesterRegistration                @relation(fields: [semesterRegistrationId], references: [id])\n  course                             Course                              @relation(fields: [courseId], references: [id])\n  semesterRegistrationId             String\n  offeredCourseSections              OfferedCourseSection[]\n  studentSemesterRegistrationCourses StudentSemesterRegistrationCourse[]\n  suspendGrade                       Int                                 @default(0)\n\n  @@map(\"offered_courses\")\n}\n\nmodel OfferedCourseSection {\n  id                                 String                              @id @default(uuid())\n  title                              String\n  maxCapacity                        Int                                 @default(0)\n  currentlyEnrolledStudent           Int                                 @default(0)\n  createdAt                          DateTime                            @default(now())\n  updatedAt                          DateTime                            @updatedAt\n  semesterRegistrationId             String\n  semesterRegistration               SemesterRegistration                @relation(fields: [semesterRegistrationId], references: [id])\n  offeredCourseId                    String\n  offeredCourse                      OfferedCourse                       @relation(fields: [offeredCourseId], references: [id])\n  offeredCourseClassSchedules        OfferedCourseClassSchedule[]\n  studentSemesterRegistrationCourses StudentSemesterRegistrationCourse[]\n\n  @@map(\"offered_course_sections\")\n}\n\nmodel OfferedCourseClassSchedule {\n  id                     String               @id @default(uuid())\n  startTime              String\n  endTime                String\n  dayOfWeek              WeekDays             @default(SATURDAY)\n  createdAt              DateTime             @default(now())\n  updatedAt              DateTime             @updatedAt\n  offeredCourseSectionId String\n  offeredCourseSection   OfferedCourseSection @relation(fields: [offeredCourseSectionId], references: [id])\n  semesterRegistrationId String\n  semesterRegistration   SemesterRegistration @relation(fields: [semesterRegistrationId], references: [id])\n  roomId                 String\n  room                   Room                 @relation(fields: [roomId], references: [id])\n  facultyId              String\n  faculty                Faculty              @relation(fields: [facultyId], references: [id])\n\n  @@map(\"offered_course_class_schedules\")\n}\n\nmodel StudentSemesterRegistration {\n  id                     String               @id @default(uuid())\n  isConfirmed            Boolean?             @default(false)\n  totalCreditsTaken      Int?                 @default(0)\n  paymentRecipt          String?\n  createdAt              DateTime             @default(now())\n  updatedAt              DateTime             @updatedAt\n  studentId              String\n  student                Student              @relation(fields: [studentId], references: [id])\n  semesterRegistrationId String\n  semesterRegistration   SemesterRegistration @relation(fields: [semesterRegistrationId], references: [id])\n\n  @@map(\"student_semester_registrations\")\n}\n\nmodel StudentSemesterRegistrationCourse {\n  semesterRegistrationId String\n  semesterRegistration   SemesterRegistration @relation(fields: [semesterRegistrationId], references: [id])\n  studentId              String\n  student                Student              @relation(fields: [studentId], references: [id])\n  offeredCourseId        String\n  offeredCourse          OfferedCourse        @relation(fields: [offeredCourseId], references: [id])\n  offeredCourseSectionId String\n  offeredCourseSection   OfferedCourseSection @relation(fields: [offeredCourseSectionId], references: [id])\n  createdAt              DateTime             @default(now())\n  updatedAt              DateTime             @updatedAt\n\n  @@id([semesterRegistrationId, studentId, offeredCourseId])\n  @@map(\"student_semester_registration_courses\")\n}\n\nmodel StudentEnrolledCourse {\n  id                         String                       @id @default(uuid())\n  grade                      String?\n  point                      Float?                       @default(0)\n  totalMarks                 Int?                         @default(0)\n  status                     StudentEnrolledCourseStatus? @default(ONGOING)\n  createdAt                  DateTime                     @default(now())\n  updatedAt                  DateTime                     @updatedAt\n  studentId                  String\n  student                    Student                      @relation(fields: [studentId], references: [id])\n  academicSemesterId         String\n  courseId                   String\n  course                     Course                       @relation(fields: [courseId], references: [id])\n  studentEnrolledCourseMarks StudentEnrolledCourseMark[]\n  academicSemester           AcademicSemester             @relation(name: \"EnrolledCourseSemester\", fields: [academicSemesterId], references: [id])\n\n  @@map(\"student_enrolled_courses\")\n}\n\nmodel StudentEnrolledCourseMark {\n  id                      String                @id @default(uuid())\n  examType                ExamType?             @default(MIDTERM)\n  createdAt               DateTime              @default(now())\n  updatedAt               DateTime              @updatedAt\n  studentId               String\n  student                 Student               @relation(fields: [studentId], references: [id])\n  studentEnrolledCourseId String\n  studentEnrolledCourse   StudentEnrolledCourse @relation(fields: [studentEnrolledCourseId], references: [id])\n  academicSemesterId      String\n  academicSemester        AcademicSemester      @relation(name: \"MarkSemester\", fields: [academicSemesterId], references: [id])\n\n  continuousAssessments Json\n\n  frequencyExam Float? // Nota da prova de frequência (nota máxima de 10)\n  finalExam     Float? // Nota do exame final (nota máxima de 10)\n  resourceExam  Float? // Nota do exame de recurso (nota máxima de 10)\n  specialExam   Float? // Nota do exame especial (nota máxima de 10)\n  recoveryExam  Float? // Nota do exame de recuperação (nota máxima de 10)\n\n  totalMarks Float @default(0) // This can be calculated via code if needed\n  grade      Float @default(0)\n\n  @@map(\"student_enrolled_course_marks\")\n}\n\nmodel CourseDiscipline {\n  id           String @id @default(cuid())\n  courseId     String\n  disciplineId String\n  semesterId   String\n\n  course     Course           @relation(fields: [courseId], references: [id])\n  discipline Discipline       @relation(fields: [disciplineId], references: [id])\n  semester   AcademicSemester @relation(fields: [semesterId], references: [id])\n\n  credits Int\n\n  @@unique([courseId, disciplineId, semesterId])\n  @@map(\"course_disciplines\")\n}\n\nmodel StudentCarriedCourse {\n  id           String              @id @default(uuid())\n  studentId    String\n  disciplineId String\n  semesterId   String\n  shift        Shift\n  price        Int\n  status       CarriedCourseStatus @default(ACTIVE) // pode ser ACTIVE, COMPLETED, etc.\n  createdAt    DateTime            @default(now())\n\n  student    Student          @relation(fields: [studentId], references: [id])\n  discipline Discipline       @relation(fields: [disciplineId], references: [id])\n  semester   AcademicSemester @relation(fields: [semesterId], references: [id])\n\n  @@map(\"student_carried_courses\")\n}\n\nmodel CoursePricing {\n  id        String   @id @default(uuid())\n  price     Float\n  courseId  String   @unique\n  course    Course   @relation(fields: [courseId], references: [id])\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map(\"course_pricings\")\n}\n\nmodel Discipline {\n  id                    String   @id @default(cuid())\n  name                  String\n  code                  String   @unique\n  description           String?\n  credits               Int\n  minimumGradeToDismiss Float    @default(10)\n  createdAt             DateTime @default(now())\n  updatedAt             DateTime @updatedAt\n\n  courseDisciplines    CourseDiscipline[]\n  StudentCarriedCourse StudentCarriedCourse[]\n\n  @@map(\"disciplines\")\n}\n\nmodel StudentSemesterPayment {\n  id                 String           @id @default(uuid())\n  paymentId          String\n  payment            Payment          @relation(fields: [paymentId], references: [id])\n  totalPayment       Int\n  baseAmount         Int\n  lateFee            Int              @default(0)\n  paymentMonth       Int\n  paymentYear        Int\n  createdAt          DateTime         @default(now())\n  updatedAt          DateTime         @updatedAt\n  studentId          String\n  student            Student          @relation(fields: [studentId], references: [id])\n  academicSemesterId String\n  academicSemester   AcademicSemester @relation(fields: [academicSemesterId], references: [id])\n\n  @@map(\"sudent_semester_payments\")\n}\n\nmodel StudentAcademicInfo {\n  id                    String   @id @default(uuid())\n  createdAt             DateTime @default(now())\n  updatedAt             DateTime @updatedAt\n  studentId             String\n  student               Student  @relation(fields: [studentId], references: [id])\n  totalCompletedCredits Int?     @default(0)\n  cgpa                  Float?   @default(0)\n\n  @@map(\"student_academic_infos\")\n}\n\nmodel Events {\n  id          String   @id @default(uuid())\n  title       String\n  description String\n  thumbnail   String\n  color       String\n  location    DateTime\n  mandatory   Boolean  @default(false)\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n}\n\nmodel Payment {\n  id                     String                   @id @default(uuid())\n  paymentRecipt          String?\n  totalAmount            Int                      @default(0)\n  approved               Boolean                  @default(false)\n  paymentType            PAYMENTTYPE              @default(REFERENCE)\n  status                 PAYMENTSTATUS            @default(NOT_PAID)\n  method                 PAYMENTMETHOD            @default(EXPRESS)\n  StudentSemesterPayment StudentSemesterPayment[]\n\n  createdAt        DateTime           @default(now())\n  updatedAt        DateTime           @updatedAt\n  PaymentReference PaymentReference[]\n}\n\nmodel PaymentReference {\n  id        String @id @default(uuid())\n  reference String\n  code      Int\n  message   String\n\n  paymentId String\n  payment   Payment  @relation(fields: [paymentId], references: [id])\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nenum SemesterRegistrationStatus {\n  UPCOMING\n  ONGOING\n  ENDED\n}\n\nenum Shift {\n  MORNING\n  AFTERNOON\n  EVENING\n}\n\nenum StudentType {\n  NORMAL\n  CADEIRANTE\n  BOLSEIRO\n}\n\nenum Status {\n  APROVE\n  PENDING\n  DENIDE\n}\n\nenum WeekDays {\n  SATURDAY\n  SUNDAY\n  MONDAY\n  TUESDAY\n  WEDNESDAY\n  THURSDAY\n  FRIDAY\n}\n\nenum CarriedCourseStatus {\n  ACTIVE\n  COMPLETED\n  DROPPED\n}\n\nenum StudentEnrolledCourseStatus {\n  ONGOING\n  COMPLETED\n  WITHDRAWN\n}\n\nenum ExamType {\n  MIDTERM\n  FINAL\n}\n\nenum PAYMENTSTATUS {\n  PENDING\n  NOT_PAID\n  PAID\n}\n\nenum YearLevel {\n  FIRST\n  SECOND\n  THIRD\n  FOURTH\n  FIFTH\n}\n\nenum UserRole {\n  super_admin\n  admin\n  student\n  editor\n  faculty\n  accountant\n  department_head\n  staff\n}\n\nenum PAYMENTTYPE {\n  RECEIPT\n  REFERENCE\n}\n\nenum PAYMENTMETHOD {\n  INVOICE\n  EXPRESS\n}\n",
  "inlineSchemaHash": "535cff491cb337001cf6c15c0550380eafe496206242517c0bc8336bef3de5e6",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Users\":{\"dbName\":\"users\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicDepartment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicDepartment\",\"nativeType\":null,\"relationName\":\"DepartmentHead\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staffDepartments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicDepartment\",\"nativeType\":null,\"relationName\":\"DepartmentStaff\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserRole\",\"nativeType\":null,\"default\":\"super_admin\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AcademicSemester\":{\"dbName\":\"academic_semesters\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startMonth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endMonth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isCurrent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"courseDisciplines\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CourseDiscipline\",\"nativeType\":null,\"relationName\":\"AcademicSemesterToCourseDiscipline\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semesterRegistrations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SemesterRegistration\",\"nativeType\":null,\"relationName\":\"AcademicSemesterToSemesterRegistration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"students\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"nativeType\":null,\"relationName\":\"AcademicSemesterToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentEnrolledCourses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentEnrolledCourse\",\"nativeType\":null,\"relationName\":\"EnrolledCourseSemester\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentEnrolledCourseMarks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentEnrolledCourseMark\",\"nativeType\":null,\"relationName\":\"MarkSemester\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentSemesterPayments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentSemesterPayment\",\"nativeType\":null,\"relationName\":\"AcademicSemesterToStudentSemesterPayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StudentCarriedCourse\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentCarriedCourse\",\"nativeType\":null,\"relationName\":\"AcademicSemesterToStudentCarriedCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AcademicFaculty\":{\"dbName\":\"academic_faculties\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"academicDepartments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicDepartment\",\"nativeType\":null,\"relationName\":\"AcademicDepartmentToAcademicFaculty\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faculties\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Faculty\",\"nativeType\":null,\"relationName\":\"AcademicFacultyToFaculty\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"students\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"nativeType\":null,\"relationName\":\"AcademicFacultyToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admitionExame\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdmitionExameRegistration\",\"nativeType\":null,\"relationName\":\"AcademicFacultyToAdmitionExameRegistration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AdmitionExamePrice\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdmitionExamePrice\",\"nativeType\":null,\"relationName\":\"AcademicFacultyToAdmitionExamePrice\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AdmitionExamePeriod\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdmitionExamePeriod\",\"nativeType\":null,\"relationName\":\"AcademicFacultyToAdmitionExamePeriod\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AcademicDepartment\":{\"dbName\":\"academic_departments\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicFacultyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"academicFaculty\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicFaculty\",\"nativeType\":null,\"relationName\":\"AcademicDepartmentToAcademicFaculty\",\"relationFromFields\":[\"academicFacultyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faculties\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Faculty\",\"nativeType\":null,\"relationName\":\"AcademicDepartmentToFaculty\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"nativeType\":null,\"relationName\":\"AcademicDepartmentToCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"students\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"nativeType\":null,\"relationName\":\"AcademicDepartmentToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departmentHeadId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departmentHead\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"nativeType\":null,\"relationName\":\"DepartmentHead\",\"relationFromFields\":[\"departmentHeadId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staffMembers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"nativeType\":null,\"relationName\":\"DepartmentStaff\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OfferedCourse\",\"nativeType\":null,\"relationName\":\"AcademicDepartmentToOfferedCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Student\":{\"dbName\":\"students\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StudentType\",\"nativeType\":null,\"default\":\"NORMAL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"middleName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profileImage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactNo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isWoker\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shift\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Shift\",\"nativeType\":null,\"default\":\"MORNING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"yearLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"YearLevel\",\"nativeType\":null,\"default\":\"FIRST\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gradeDeclarationFile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"biFile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"presentAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permanentAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicSemesterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicFacultyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicDepartmentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admissionRegistrationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"academicFaculty\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicFaculty\",\"nativeType\":null,\"relationName\":\"AcademicFacultyToStudent\",\"relationFromFields\":[\"academicFacultyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admissionRegistration\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdmitionExameRegistration\",\"nativeType\":null,\"relationName\":\"AdmitionExameRegistrationToStudent\",\"relationFromFields\":[\"admissionRegistrationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicDepartment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicDepartment\",\"nativeType\":null,\"relationName\":\"AcademicDepartmentToStudent\",\"relationFromFields\":[\"academicDepartmentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicSemester\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicSemester\",\"nativeType\":null,\"relationName\":\"AcademicSemesterToStudent\",\"relationFromFields\":[\"academicSemesterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentSemesterRegistrations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentSemesterRegistration\",\"nativeType\":null,\"relationName\":\"StudentToStudentSemesterRegistration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentSemesterRegistrationCourses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentSemesterRegistrationCourse\",\"nativeType\":null,\"relationName\":\"StudentToStudentSemesterRegistrationCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentEnrolledCourses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentEnrolledCourse\",\"nativeType\":null,\"relationName\":\"StudentToStudentEnrolledCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentEnrolledCourseMarks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentEnrolledCourseMark\",\"nativeType\":null,\"relationName\":\"StudentToStudentEnrolledCourseMark\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentSemesterPayments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentSemesterPayment\",\"nativeType\":null,\"relationName\":\"StudentToStudentSemesterPayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentAcademicInfos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentAcademicInfo\",\"nativeType\":null,\"relationName\":\"StudentToStudentAcademicInfo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StudentCarriedCourse\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentCarriedCourse\",\"nativeType\":null,\"relationName\":\"StudentToStudentCarriedCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Faculty\":{\"dbName\":\"faculties\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facultyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"middleName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profileImage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contactNo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shift\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Shift\",\"nativeType\":null,\"default\":\"MORNING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"designation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicFacultyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicDepartmentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"courses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CourseFaculty\",\"nativeType\":null,\"relationName\":\"CourseFacultyToFaculty\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicDepartment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicDepartment\",\"nativeType\":null,\"relationName\":\"AcademicDepartmentToFaculty\",\"relationFromFields\":[\"academicDepartmentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicFaculty\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicFaculty\",\"nativeType\":null,\"relationName\":\"AcademicFacultyToFaculty\",\"relationFromFields\":[\"academicFacultyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourseClassSchedules\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OfferedCourseClassSchedule\",\"nativeType\":null,\"relationName\":\"FacultyToOfferedCourseClassSchedule\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Building\":{\"dbName\":\"buildings\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"rooms\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Room\",\"nativeType\":null,\"relationName\":\"BuildingToRoom\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Room\":{\"dbName\":\"rooms\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"floor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buildingId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"building\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Building\",\"nativeType\":null,\"relationName\":\"BuildingToRoom\",\"relationFromFields\":[\"buildingId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourseClassSchedules\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OfferedCourseClassSchedule\",\"nativeType\":null,\"relationName\":\"OfferedCourseClassScheduleToRoom\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Course\":{\"dbName\":\"courses\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"durationInYears\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseDisciplines\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CourseDiscipline\",\"nativeType\":null,\"relationName\":\"CourseToCourseDiscipline\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coursePricing\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CoursePricing\",\"nativeType\":null,\"relationName\":\"CourseToCoursePricing\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"yearLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"YearLevel\",\"nativeType\":null,\"default\":\"FIRST\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shift\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Shift\",\"nativeType\":null,\"default\":\"MORNING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicDepartmentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicDepartment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicDepartment\",\"nativeType\":null,\"relationName\":\"AcademicDepartmentToCourse\",\"relationFromFields\":[\"academicDepartmentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"studentCourses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentEnrolledCourse\",\"nativeType\":null,\"relationName\":\"CourseToStudentEnrolledCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preRequisite\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CourseToPreRequisite\",\"nativeType\":null,\"relationName\":\"CourseToPreRequisite\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preRequisiteFor\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CourseToPreRequisite\",\"nativeType\":null,\"relationName\":\"PreRequisiteToCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faculties\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CourseFaculty\",\"nativeType\":null,\"relationName\":\"CourseToCourseFaculty\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OfferedCourse\",\"nativeType\":null,\"relationName\":\"CourseToOfferedCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CourseToPreRequisite\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"courseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preRequisiteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"nativeType\":null,\"relationName\":\"CourseToPreRequisite\",\"relationFromFields\":[\"courseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preRequisite\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"nativeType\":null,\"relationName\":\"PreRequisiteToCourse\",\"relationFromFields\":[\"preRequisiteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"courseId\",\"preRequisiteId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CourseFaculty\":{\"dbName\":\"course_faculties\",\"schema\":null,\"fields\":[{\"name\":\"courseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facultyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"nativeType\":null,\"relationName\":\"CourseToCourseFaculty\",\"relationFromFields\":[\"courseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faculty\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Faculty\",\"nativeType\":null,\"relationName\":\"CourseFacultyToFaculty\",\"relationFromFields\":[\"facultyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"courseId\",\"facultyId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SemesterRegistration\":{\"dbName\":\"semester_registrations\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SemesterRegistrationStatus\",\"nativeType\":null,\"default\":\"UPCOMING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"academicSemesterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicSemester\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicSemester\",\"nativeType\":null,\"relationName\":\"AcademicSemesterToSemesterRegistration\",\"relationFromFields\":[\"academicSemesterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OfferedCourse\",\"nativeType\":null,\"relationName\":\"OfferedCourseToSemesterRegistration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourseSections\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OfferedCourseSection\",\"nativeType\":null,\"relationName\":\"OfferedCourseSectionToSemesterRegistration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourseClassSchedules\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OfferedCourseClassSchedule\",\"nativeType\":null,\"relationName\":\"OfferedCourseClassScheduleToSemesterRegistration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentSemesterRegistrations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentSemesterRegistration\",\"nativeType\":null,\"relationName\":\"SemesterRegistrationToStudentSemesterRegistration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentSemesterRegistrationCourses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentSemesterRegistrationCourse\",\"nativeType\":null,\"relationName\":\"SemesterRegistrationToStudentSemesterRegistrationCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AdmitionExameRegistration\":{\"dbName\":\"admition_exame_registration\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"applicantName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentRecipt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Status\",\"nativeType\":null,\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"document\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentAmoute\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aprovePayment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exameResults\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fase\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExameFase\",\"nativeType\":null,\"relationName\":\"AdmitionExameRegistrationToExameFase\",\"relationFromFields\":[\"faseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exameDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rejectionReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"academicFalcultyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicFalculty\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicFaculty\",\"nativeType\":null,\"relationName\":\"AcademicFacultyToAdmitionExameRegistration\",\"relationFromFields\":[\"academicFalcultyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"nativeType\":null,\"relationName\":\"AdmitionExameRegistrationToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AdmitionExamePrice\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicFacultyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicFaculty\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicFaculty\",\"nativeType\":null,\"relationName\":\"AcademicFacultyToAdmitionExamePrice\",\"relationFromFields\":[\"academicFacultyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AdmitionExamePeriod\":{\"dbName\":\"admition_exame_periods\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicFacultyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicFaculty\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicFaculty\",\"nativeType\":null,\"relationName\":\"AcademicFacultyToAdmitionExamePeriod\",\"relationFromFields\":[\"academicFacultyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ExameFase\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"registrations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdmitionExameRegistration\",\"nativeType\":null,\"relationName\":\"AdmitionExameRegistrationToExameFase\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OfferedCourse\":{\"dbName\":\"offered_courses\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicDepartmentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicDepartment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicDepartment\",\"nativeType\":null,\"relationName\":\"AcademicDepartmentToOfferedCourse\",\"relationFromFields\":[\"academicDepartmentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semesterRegistration\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SemesterRegistration\",\"nativeType\":null,\"relationName\":\"OfferedCourseToSemesterRegistration\",\"relationFromFields\":[\"semesterRegistrationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"nativeType\":null,\"relationName\":\"CourseToOfferedCourse\",\"relationFromFields\":[\"courseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semesterRegistrationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourseSections\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OfferedCourseSection\",\"nativeType\":null,\"relationName\":\"OfferedCourseToOfferedCourseSection\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentSemesterRegistrationCourses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentSemesterRegistrationCourse\",\"nativeType\":null,\"relationName\":\"OfferedCourseToStudentSemesterRegistrationCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"suspendGrade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OfferedCourseSection\":{\"dbName\":\"offered_course_sections\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxCapacity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentlyEnrolledStudent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"semesterRegistrationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semesterRegistration\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SemesterRegistration\",\"nativeType\":null,\"relationName\":\"OfferedCourseSectionToSemesterRegistration\",\"relationFromFields\":[\"semesterRegistrationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourse\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OfferedCourse\",\"nativeType\":null,\"relationName\":\"OfferedCourseToOfferedCourseSection\",\"relationFromFields\":[\"offeredCourseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourseClassSchedules\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OfferedCourseClassSchedule\",\"nativeType\":null,\"relationName\":\"OfferedCourseClassScheduleToOfferedCourseSection\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentSemesterRegistrationCourses\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentSemesterRegistrationCourse\",\"nativeType\":null,\"relationName\":\"OfferedCourseSectionToStudentSemesterRegistrationCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OfferedCourseClassSchedule\":{\"dbName\":\"offered_course_class_schedules\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dayOfWeek\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"WeekDays\",\"nativeType\":null,\"default\":\"SATURDAY\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"offeredCourseSectionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourseSection\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OfferedCourseSection\",\"nativeType\":null,\"relationName\":\"OfferedCourseClassScheduleToOfferedCourseSection\",\"relationFromFields\":[\"offeredCourseSectionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semesterRegistrationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semesterRegistration\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SemesterRegistration\",\"nativeType\":null,\"relationName\":\"OfferedCourseClassScheduleToSemesterRegistration\",\"relationFromFields\":[\"semesterRegistrationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Room\",\"nativeType\":null,\"relationName\":\"OfferedCourseClassScheduleToRoom\",\"relationFromFields\":[\"roomId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facultyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faculty\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Faculty\",\"nativeType\":null,\"relationName\":\"FacultyToOfferedCourseClassSchedule\",\"relationFromFields\":[\"facultyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StudentSemesterRegistration\":{\"dbName\":\"student_semester_registrations\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isConfirmed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalCreditsTaken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentRecipt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"nativeType\":null,\"relationName\":\"StudentToStudentSemesterRegistration\",\"relationFromFields\":[\"studentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semesterRegistrationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semesterRegistration\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SemesterRegistration\",\"nativeType\":null,\"relationName\":\"SemesterRegistrationToStudentSemesterRegistration\",\"relationFromFields\":[\"semesterRegistrationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StudentSemesterRegistrationCourse\":{\"dbName\":\"student_semester_registration_courses\",\"schema\":null,\"fields\":[{\"name\":\"semesterRegistrationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semesterRegistration\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SemesterRegistration\",\"nativeType\":null,\"relationName\":\"SemesterRegistrationToStudentSemesterRegistrationCourse\",\"relationFromFields\":[\"semesterRegistrationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"nativeType\":null,\"relationName\":\"StudentToStudentSemesterRegistrationCourse\",\"relationFromFields\":[\"studentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourse\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OfferedCourse\",\"nativeType\":null,\"relationName\":\"OfferedCourseToStudentSemesterRegistrationCourse\",\"relationFromFields\":[\"offeredCourseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourseSectionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offeredCourseSection\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OfferedCourseSection\",\"nativeType\":null,\"relationName\":\"OfferedCourseSectionToStudentSemesterRegistrationCourse\",\"relationFromFields\":[\"offeredCourseSectionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":{\"name\":null,\"fields\":[\"semesterRegistrationId\",\"studentId\",\"offeredCourseId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StudentEnrolledCourse\":{\"dbName\":\"student_enrolled_courses\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"point\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalMarks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StudentEnrolledCourseStatus\",\"nativeType\":null,\"default\":\"ONGOING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"nativeType\":null,\"relationName\":\"StudentToStudentEnrolledCourse\",\"relationFromFields\":[\"studentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicSemesterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"nativeType\":null,\"relationName\":\"CourseToStudentEnrolledCourse\",\"relationFromFields\":[\"courseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentEnrolledCourseMarks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentEnrolledCourseMark\",\"nativeType\":null,\"relationName\":\"StudentEnrolledCourseToStudentEnrolledCourseMark\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicSemester\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicSemester\",\"nativeType\":null,\"relationName\":\"EnrolledCourseSemester\",\"relationFromFields\":[\"academicSemesterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StudentEnrolledCourseMark\":{\"dbName\":\"student_enrolled_course_marks\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"examType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ExamType\",\"nativeType\":null,\"default\":\"MIDTERM\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"nativeType\":null,\"relationName\":\"StudentToStudentEnrolledCourseMark\",\"relationFromFields\":[\"studentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentEnrolledCourseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentEnrolledCourse\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentEnrolledCourse\",\"nativeType\":null,\"relationName\":\"StudentEnrolledCourseToStudentEnrolledCourseMark\",\"relationFromFields\":[\"studentEnrolledCourseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicSemesterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicSemester\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicSemester\",\"nativeType\":null,\"relationName\":\"MarkSemester\",\"relationFromFields\":[\"academicSemesterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"continuousAssessments\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frequencyExam\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"finalExam\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resourceExam\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialExam\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recoveryExam\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalMarks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CourseDiscipline\":{\"dbName\":\"course_disciplines\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disciplineId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semesterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"nativeType\":null,\"relationName\":\"CourseToCourseDiscipline\",\"relationFromFields\":[\"courseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discipline\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Discipline\",\"nativeType\":null,\"relationName\":\"CourseDisciplineToDiscipline\",\"relationFromFields\":[\"disciplineId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semester\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicSemester\",\"nativeType\":null,\"relationName\":\"AcademicSemesterToCourseDiscipline\",\"relationFromFields\":[\"semesterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"credits\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"courseId\",\"disciplineId\",\"semesterId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"courseId\",\"disciplineId\",\"semesterId\"]}],\"isGenerated\":false},\"StudentCarriedCourse\":{\"dbName\":\"student_carried_courses\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disciplineId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semesterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shift\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Shift\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CarriedCourseStatus\",\"nativeType\":null,\"default\":\"ACTIVE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"nativeType\":null,\"relationName\":\"StudentToStudentCarriedCourse\",\"relationFromFields\":[\"studentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discipline\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Discipline\",\"nativeType\":null,\"relationName\":\"DisciplineToStudentCarriedCourse\",\"relationFromFields\":[\"disciplineId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semester\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicSemester\",\"nativeType\":null,\"relationName\":\"AcademicSemesterToStudentCarriedCourse\",\"relationFromFields\":[\"semesterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CoursePricing\":{\"dbName\":\"course_pricings\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"nativeType\":null,\"relationName\":\"CourseToCoursePricing\",\"relationFromFields\":[\"courseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Discipline\":{\"dbName\":\"disciplines\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"cuid\",\"args\":[1]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"credits\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minimumGradeToDismiss\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"courseDisciplines\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CourseDiscipline\",\"nativeType\":null,\"relationName\":\"CourseDisciplineToDiscipline\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StudentCarriedCourse\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentCarriedCourse\",\"nativeType\":null,\"relationName\":\"DisciplineToStudentCarriedCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StudentSemesterPayment\":{\"dbName\":\"sudent_semester_payments\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payment\",\"nativeType\":null,\"relationName\":\"PaymentToStudentSemesterPayment\",\"relationFromFields\":[\"paymentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalPayment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"baseAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lateFee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentMonth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"nativeType\":null,\"relationName\":\"StudentToStudentSemesterPayment\",\"relationFromFields\":[\"studentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicSemesterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"academicSemester\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AcademicSemester\",\"nativeType\":null,\"relationName\":\"AcademicSemesterToStudentSemesterPayment\",\"relationFromFields\":[\"academicSemesterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StudentAcademicInfo\":{\"dbName\":\"student_academic_infos\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"nativeType\":null,\"relationName\":\"StudentToStudentAcademicInfo\",\"relationFromFields\":[\"studentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalCompletedCredits\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cgpa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Events\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mandatory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Payment\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentRecipt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"approved\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PAYMENTTYPE\",\"nativeType\":null,\"default\":\"REFERENCE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PAYMENTSTATUS\",\"nativeType\":null,\"default\":\"NOT_PAID\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"method\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PAYMENTMETHOD\",\"nativeType\":null,\"default\":\"EXPRESS\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"StudentSemesterPayment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentSemesterPayment\",\"nativeType\":null,\"relationName\":\"PaymentToStudentSemesterPayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"PaymentReference\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentReference\",\"nativeType\":null,\"relationName\":\"PaymentToPaymentReference\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PaymentReference\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reference\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payment\",\"nativeType\":null,\"relationName\":\"PaymentToPaymentReference\",\"relationFromFields\":[\"paymentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"SemesterRegistrationStatus\":{\"values\":[{\"name\":\"UPCOMING\",\"dbName\":null},{\"name\":\"ONGOING\",\"dbName\":null},{\"name\":\"ENDED\",\"dbName\":null}],\"dbName\":null},\"Shift\":{\"values\":[{\"name\":\"MORNING\",\"dbName\":null},{\"name\":\"AFTERNOON\",\"dbName\":null},{\"name\":\"EVENING\",\"dbName\":null}],\"dbName\":null},\"StudentType\":{\"values\":[{\"name\":\"NORMAL\",\"dbName\":null},{\"name\":\"CADEIRANTE\",\"dbName\":null},{\"name\":\"BOLSEIRO\",\"dbName\":null}],\"dbName\":null},\"Status\":{\"values\":[{\"name\":\"APROVE\",\"dbName\":null},{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"DENIDE\",\"dbName\":null}],\"dbName\":null},\"WeekDays\":{\"values\":[{\"name\":\"SATURDAY\",\"dbName\":null},{\"name\":\"SUNDAY\",\"dbName\":null},{\"name\":\"MONDAY\",\"dbName\":null},{\"name\":\"TUESDAY\",\"dbName\":null},{\"name\":\"WEDNESDAY\",\"dbName\":null},{\"name\":\"THURSDAY\",\"dbName\":null},{\"name\":\"FRIDAY\",\"dbName\":null}],\"dbName\":null},\"CarriedCourseStatus\":{\"values\":[{\"name\":\"ACTIVE\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"DROPPED\",\"dbName\":null}],\"dbName\":null},\"StudentEnrolledCourseStatus\":{\"values\":[{\"name\":\"ONGOING\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"WITHDRAWN\",\"dbName\":null}],\"dbName\":null},\"ExamType\":{\"values\":[{\"name\":\"MIDTERM\",\"dbName\":null},{\"name\":\"FINAL\",\"dbName\":null}],\"dbName\":null},\"PAYMENTSTATUS\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"NOT_PAID\",\"dbName\":null},{\"name\":\"PAID\",\"dbName\":null}],\"dbName\":null},\"YearLevel\":{\"values\":[{\"name\":\"FIRST\",\"dbName\":null},{\"name\":\"SECOND\",\"dbName\":null},{\"name\":\"THIRD\",\"dbName\":null},{\"name\":\"FOURTH\",\"dbName\":null},{\"name\":\"FIFTH\",\"dbName\":null}],\"dbName\":null},\"UserRole\":{\"values\":[{\"name\":\"super_admin\",\"dbName\":null},{\"name\":\"admin\",\"dbName\":null},{\"name\":\"student\",\"dbName\":null},{\"name\":\"editor\",\"dbName\":null},{\"name\":\"faculty\",\"dbName\":null},{\"name\":\"accountant\",\"dbName\":null},{\"name\":\"department_head\",\"dbName\":null},{\"name\":\"staff\",\"dbName\":null}],\"dbName\":null},\"PAYMENTTYPE\":{\"values\":[{\"name\":\"RECEIPT\",\"dbName\":null},{\"name\":\"REFERENCE\",\"dbName\":null}],\"dbName\":null},\"PAYMENTMETHOD\":{\"values\":[{\"name\":\"INVOICE\",\"dbName\":null},{\"name\":\"EXPRESS\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

