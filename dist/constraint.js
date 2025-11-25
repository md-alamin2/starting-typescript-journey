"use strict";
// constraint: strict rules
Object.defineProperty(exports, "__esModule", { value: true });
const addStudentToCourse = (studentInfo) => {
    return {
        course: 'Next Level Web Development',
        ...studentInfo
    };
};
const student1 = {
    id: 1234,
    name: 'Al-amin',
    hasPen: true
};
const student2 = {
    id: 12345,
    name: 'Abdullah',
    hasPen: true,
    hasCar: true
};
const student3 = {
    id: 3456,
    name: 'Raju',
    hasWatch: true
};
const newStudent = addStudentToCourse(student3);
console.log(newStudent);
//# sourceMappingURL=constraint.js.map