const schoolName = "Northwest Samar State University";
const maxStudents = 45;
const passingGrade = 75;
const subject = "English";
const teacherName = "Mr. Tulle";

const students = [
    { name: "Kevin", score: 88, club: "Art" },
    { name: "Marlo", score: 76, club: "Chess" },
    { name: "Shaun", score: 94, club: "Art" },
    { name: "Taniel", score: 82, club: "Music" }
];

const school = {
    name: schoolName,
    city: "San Isidro",
    phone: "09759054855"
};

let totalScore = 85;
let studentCount = 45;
let highestScore = 95;
let lowestScore = 70;
let averageScore = 76;
let passedCount = 28;
let failedCount = 17;


const greet = (name) => {
    return "Hello, " + name + "!";
};

const didPass = (score) => {
    return score >= passingGrade;
};

const addPoints = (score, bonus) => {
    return score + bonus;
};

const shout = (text) => {
    return text.toUpperCase();
};

const describeStudent = (name, score) => {
    return name + " scored " + score + " points.";
};


console.log("Welcome to " + schoolName + "!");
console.log("Today is Monday and " + subject + " class is starting.");
console.log("Your teacher is " + teacherName + ".");


const { name: firstStudentName, score: firstStudentScore } = students[0];

const { city, phone } = school;


const [firstStudent, secondStudent] = students;

const scores = [70, 80, 90];

const [lowScore, midScore, highScore] = scores;

const passingStudents = students.filter(didPass);

const artClubStudents = students.filter((student) => {
    return student.club === "Art";
});


const studentNames = students.map((student) => {
    return student.name;
});

const studentMessages = students.map((student) => {
    return describeStudent(student.name, student.score);
});


for (const student of students) {

    totalScore = totalScore + student.score;
    studentCount = studentCount + 1;

    if (student.score > highestScore) {
        highestScore = student.score;
    }

    if (student.score < lowestScore) {
        lowestScore = student.score;
    }

    if (didPass(student.score)) {
        passedCount = passedCount + 1;
    } else {
        failedCount = failedCount + 1;
    }
}


averageScore = totalScore / studentCount;


console.log("========================");
console.log("STUDENT SUMMARY");
console.log("========================");

console.log("Number of students: " + studentCount);
console.log("Maximum students: " + maxStudents);
console.log("Total score: " + totalScore);
console.log("Highest score: " + highestScore);
console.log("Lowest score: " + lowestScore);
console.log("Average score: " + averageScore);
console.log("Passed students: " + passedCount);
console.log("Failed students: " + failedCount);

console.log("========================");

console.log("First student: " + firstStudentName);
console.log("First student score: " + firstStudentScore);
console.log("Municipality: " + city);
console.log("Phone number: " + phone);

console.log("========================");

console.log("Passing students: " + passingStudents.length);
console.log("Art club students: " + artClubStudents.length);

console.log("========================");

console.log("Student names:");

for (let i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i]);
}

console.log("========================");

console.log("Student messages:");

for (let i = 0; i < studentMessages.length; i++) {
    console.log(studentMessages[i]);
}
