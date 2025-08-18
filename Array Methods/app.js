let studentList = document.getElementById("students");

const students = [
  { name: "Alexa", marks: 66 },
  { name: "Siri", marks: 48 },
  { name: "Haze", marks: 43 },
  { name: "Amariya", marks: 95 },
  { name: "Rehab", marks: 92 },
];

// Map Method to show all students initially

function displayStudents(studentArray) {
  const outputArray = studentArray.map((stud) => {
    return `<p>Name: ${stud.name}, Marks: ${stud.marks}</p>`;
  });

  studentList.innerHTML = outputArray.join("");
}
displayStudents(students);

// Filter Method to show the students who passed

let btnShowPassed = document.getElementById("showPassed");
let passedList = document.getElementById("passedStudents");

btnShowPassed.addEventListener("click", function () {
  // Filter students who passed (marks >= 50)
  let passedStudents = students.filter((student) => student.marks >= 50);

  displayStudents(passedStudents);
});

//Reduce Method to find average of class

let avg = document.getElementById("Average");

avg.addEventListener("click", () => {
  let total = students.reduce((sum, student) => sum + student.marks, 0);

  let average = total / students.length;

  let p = document.createElement("p");
  p.innerHTML = `${average} `;
  avg.appendChild(p);
});

// Sort Method to sort students by highest to lowest marks

let btnSort = document.getElementById("sortButton");

btnSort.addEventListener("click", () => {
  let sortedStudents = [...students].sort((a, b) => b.marks - a.marks);

  displayStudents(sortedStudents);
});

// Find Method to find a record of a student

let searchBtn = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput");
let resultDiv = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  let nameToFind = searchInput.value.trim().toLowerCase();

  let foundStudent = students.find(
    (student) => student.name.toLowerCase() === nameToFind
  );

  if (foundStudent) {
    resultDiv.innerHTML = `Found: Name: ${foundStudent.name}, Marks: ${foundStudent.marks}`;
  } else {
    resultDiv.innerHTML = "Student not found.";
  }
});
