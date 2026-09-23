// ==========================================
// STUDENT INFORMATION PROGRAM
// ==========================================

// 10 LET VARIABLES
let firstName = "Darwin";
let lastName = "Mirales";
let age = 20;
let course = "BS Computer Science";
let yearLevel = 3;
let section = "BSCS-3B";
let city = "Calbayog City";
let school = "NWSSU";
let grade = 88;
let status = "Active";


// 10 CONST VARIABLES
const studentID = "2026-0897";
const subject = "JavaScript";
const teacher = "Mr. Santos";
const passingGrade = 75;
const semester = "First Semester";
const schoolYear = "2026-2027";
const department = "Computer Science";
const room = "Lab 2";
const units = 3;
const program = "BSCS";


// ==========================================
// 5 ARROW FUNCTIONS
// ==========================================

const getFullName = () => `${firstName} ${lastName}`;

const getStatus = () => {
    return grade >= passingGrade ? "Passed" : "Failed";
};

const getYear = () => `Year Level: ${yearLevel}`;

const getCourse = () => `Course: ${course}`;

const getSchool = () => `School: ${school}`;


// ==========================================
// 10 TEMPLATE LITERALS
// ==========================================

console.log(`Student Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Age: ${age}`);
console.log(`Course: ${course}`);
console.log(`Year Level: ${yearLevel}`);
console.log(`Section: ${section}`);
console.log(`City: ${city}`);
console.log(`School: ${school}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);


// ==========================================
// 3 DESTRUCTURED ARRAYS
// ==========================================

const subjects = ["JavaScript", "Database", "Networking"];
const [subject1, subject2, subject3] = subjects;

const grades = [88, 90, 85];
const [grade1, grade2, grade3] = grades;

const colors = ["Blue", "Red", "Green"];
const [color1, color2, color3] = colors;


// ==========================================
// 3 DESTRUCTURED OBJECT LITERALS
// ==========================================

const student = {
    name: "Darwin",
    age: 20,
    course: "BSCS"
};

const { name, age: studentAge, course: studentCourse } = student;


const teacherInfo = {
    teacherName: "Mr.Legaspi",
    subjectName: "JavaScript",
    teacherRoom: "Lab 2"
};

const {
    teacherName,
    subjectName,
    teacherRoom
} = teacherInfo;


const schoolInfo = {
    schoolName: "NWSSU",
    location: "Calbayog City",
    departmentName: "Computer Science"
};

const {
    schoolName,
    location,
    departmentName
} = schoolInfo;


// ==========================================
// 2 ARRAYS USING SPREAD OPERATOR
// ==========================================

const firstSubjects = ["JavaScript", "Database"];
const allSubjects = [...firstSubjects, "Networking", "Programming"];

const firstGrades = [88, 90];
const allGrades = [...firstGrades, 85, 92];


// ==========================================
// 2 OBJECT LITERALS USING SPREAD OPERATOR
// ==========================================

const basicStudent = {
    name: "Darwin",
    age: 20
};

const completeStudent = {
    ...basicStudent,
    course: "BSCS",
    year: 3
};


const basicSchool = {
    name: "NWSSU",
    city: "Calbayog"
};

const completeSchool = {
    ...basicSchool,
    department: "Computer Science",
    room: "Lab 2"
};


// ==========================================
// 2 ARRAYS USING .MAP()
// ==========================================

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

const studentNames = ["Ros", "Ruiner", "Arnel"];

const upperNames = studentNames.map(name => name.toUpperCase());


// ==========================================
// 2 ARRAYS USING .FILTER()
// ==========================================

const studentGrades = [70, 80, 90, 60, 85];

const passingStudents = studentGrades.filter(
    grade => grade >= 75
);

const highGrades = studentGrades.filter(
    grade => grade >= 85
);


// ==========================================
// 2 OBJECT LITERALS USING OPTIONAL CHAINING
// ==========================================

const studentData = {
    name: "Darwin",
    address: {
        city: "Calbayog City"
    }
};

const studentCity = studentData?.address?.city;


const teacherData = {
    name: "Mr. Legaspi",
    contact: {
        email: "teacher@example.com"
    }
};

const teacherEmail = teacherData?.contact?.email;


// ==========================================
// DISPLAY RESULTS
// ==========================================

console.log("\n===== STUDENT INFORMATION =====");

console.log(`Full Name: ${getFullName()}`);
console.log(getCourse());
console.log(getYear());
console.log(getSchool());
console.log(`Result: ${getStatus()}`);

console.log(`Subjects: ${subject1}, ${subject2}, ${subject3}`);
console.log(`Grades: ${grade1}, ${grade2}, ${grade3}`);
console.log(`Colors: ${color1}, ${color2}, ${color3}`);

console.log(`Teacher: ${teacherName}`);
console.log(`Subject: ${subjectName}`);
console.log(`Room: ${teacherRoom}`);

console.log(`School: ${schoolName}`);
console.log(`Location: ${location}`);
console.log(`Department: ${departmentName}`);

console.log(`All Subjects: ${allSubjects}`);
console.log(`All Grades: ${allGrades}`);

console.log(`Doubled Numbers: ${doubledNumbers}`);
console.log(`Uppercase Names: ${upperNames}`);

console.log(`Passing Grades: ${passingStudents}`);
console.log(`High Grades: ${highGrades}`);

console.log(`Student City: ${studentCity}`);
console.log(`Teacher Email: ${teacherEmail}`);