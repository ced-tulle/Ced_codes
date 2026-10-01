const readline = require("node:readline/promises");
const assert = require("node:assert");
const PASSING_GRADE = 75;
 
function computeAverage(grades) {
  if (grades.length === 0) {
    return 0;
  }
 
  let total = 0;
  for (const grade of grades) {
    total += grade;
  }
 
  return total / grades.length;
}
 
function getLetterGrade(average) {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 75) return "C";
  if (average >= 70) return "D";
  return "F";
}
 
function getRemarks(average) {
  return average >= PASSING_GRADE ? "Passed" : "Failed";
}
 
function isValidGrade(grade) {
  return Number.isFinite(grade) && grade >= 0 && grade <= 100;
}
 
function buildReport(studentName, subjects) {
  const average = computeAverage(subjects.map((s) => s.grade));
  const lines = [];
 
  lines.push("========================================");
  lines.push("        STUDENT GRADE REPORT");
  lines.push("========================================");
  lines.push(`Student: ${studentName}`);
  lines.push("----------------------------------------");
 
  for (const subject of subjects) {
    const name = subject.name.padEnd(20); 
    const grade = subject.grade.toFixed(2).padStart(6);
    lines.push(`${name}${grade}`);
  }
 
  lines.push("----------------------------------------");
  lines.push(`Average: ${average.toFixed(2)}`);
  lines.push(`Letter Grade: ${getLetterGrade(average)}`);
  lines.push(`Remarks: ${getRemarks(average)}`);
  lines.push("========================================");
 
  return lines.join("\n");
}
 
async function askGrade(rl, subjectName) {
  while (true) {
    const answer = await rl.question(`Grade sa ${subjectName} (0-100): `);
    const grade = Number(answer);
 
    if (answer.trim() !== "" && isValidGrade(grade)) {
      return grade;
    }
    console.log("Mali ang input. Maglagay ng numero mula 0 hanggang 100.");
  }
}
 
async function askSubjectCount(rl) {
  while (true) {
    const answer = await rl.question("Ilang subjects? ");
    const count = Number(answer);
 
    if (answer.trim() !== "" && Number.isInteger(count) && count >= 1) {
      return count;
    }
    console.log("Mali ang input. Maglagay ng whole number na 1 pataas.");
  }
}
 
async function runInteractive() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
 
  console.log("=== Student Grade Calculator ===\n");
 
  let studentName = (await rl.question("Pangalan ng estudyante: ")).trim();
  if (studentName === "") {
    studentName = "Unnamed Student";
  }
 
  const count = await askSubjectCount(rl);
 
  const subjects = [];
  for (let i = 1; i <= count; i++) {
    let name = (await rl.question(`\nPangalan ng subject #${i}: `)).trim();
    if (name === "") {
      name = `Subject ${i}`;
    }
    const grade = await askGrade(rl, name);
    subjects.push({ name, grade });
  }
 
  rl.close();
  console.log("\n" + buildReport(studentName, subjects));
}
 
function runDemo() {
  const sampleSubjects = [
    { name: "Mathematics", grade: 88 },
    { name: "Science", grade: 92 },
    { name: "English", grade: 85 },
    { name: "Filipino", grade: 90 },
    { name: "History", grade: 78 },
  ];
 
  console.log(buildReport("Juan Dela Cruz", sampleSubjects));
}
 
function runTests() {
  assert.strictEqual(computeAverage([80, 90, 100]), 90);
  assert.strictEqual(computeAverage([]), 0);
 
  assert.strictEqual(getLetterGrade(95), "A");
  assert.strictEqual(getLetterGrade(85), "B");
  assert.strictEqual(getLetterGrade(75), "C");
  assert.strictEqual(getLetterGrade(72), "D");
  assert.strictEqual(getLetterGrade(60), "F");
 
  assert.strictEqual(getRemarks(75), "Passed");
  assert.strictEqual(getRemarks(74.99), "Failed");
 
  assert.strictEqual(isValidGrade(0), true);
  assert.strictEqual(isValidGrade(100), true);
  assert.strictEqual(isValidGrade(101), false);
  assert.strictEqual(isValidGrade(-1), false);
  assert.strictEqual(isValidGrade(NaN), false);
 
  console.log("Lahat ng test ay pumasa!");
}
 
const mode = process.argv[2];
 
if (mode === "--demo") {
  runDemo();
} else if (mode === "--test") {
  runTests();
} else {
  runInteractive();
}