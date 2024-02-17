/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  const studentsWithMarksOver50 = arr.filter(student => student.marks > 50);
  const studentNames = studentsWithMarksOver50.map(student => student.name);
  console.log(studentNames);
}

function PrintStudentsbyForEach() {
  arr.forEach(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function addData() {
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(newStudent);
}

function removeFailedStudent() {
  const passedStudents = arr.filter(student => student.marks >= 50);
  console.log(passedStudents);
}

function concatenateArray() {
  const newArray = arr.concat([
    { id: 5, name: "susan", age: "20", marks: 45 },
    { id: 6, name: "alice", age: "22", marks: 75 },
    { id: 7, name: "bob", age: "21", marks: 90 }
  ]);
  console.log(newArray);
}

function deactivateActiveButton() {
  const activeButton = document.querySelector('.active');
  if (activeButton) {
    activeButton.classList.remove('active');
  }
}
document.addEventListener('click', function() {
  deactivateActiveButton();
});
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', function(event) {
    event.stopPropagation();
    deactivateActiveButton();
    this.classList.add('active');
  });
});




