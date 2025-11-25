"use strict";
// Generic with function
Object.defineProperty(exports, "__esModule", { value: true });
const createArrWithString = (value) => [value];
const createArrWithNumber = (Value) => [Value];
const createArrWithUserObj = (value) => {
    return [value];
};
// instate of this function we can use this generic function
const createArrWithGeneric = (value) => {
    return [value];
};
// const arrString = createArrWithString('Hello World');
const arrString = createArrWithGeneric('Hello World');
// const arrNumber = createArrWithNumber(1234);
const arrNumber = createArrWithGeneric(1234);
// const arrUser = createArrWithUserObj({
//     id: 123,
//     name: 'Al-amin'
// })
const arrUser = createArrWithGeneric({ id: 1234, name: "Al-amin" });
// tuple
const createArrTupleWithGeneric = (value1, value2) => {
    return [value1, value2];
};
const numberTuple = createArrTupleWithGeneric(1, 2);
const mixTuple = createArrTupleWithGeneric('2', 2);
const objTuple = createArrTupleWithGeneric({ id: 123 }, { id: 1243 });
// example
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
const newStudent = addStudentToCourse(student2);
console.log(newStudent);
//# sourceMappingURL=genericFunction.js.map