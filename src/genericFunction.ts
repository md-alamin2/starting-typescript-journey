// Generic with function

const createArrWithString = (value: string) => [value];

const createArrWithNumber = (Value: number) => [Value];

const createArrWithUserObj = (value: { id: number, name: string }) => {
    return [value]
}

// instate of this function we can use this generic function
const createArrWithGeneric = <T>(value: T) => {
    return [value]
}

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

const createArrTupleWithGeneric = <X, Y>(value1: X, value2: Y) => {
    return [value1, value2]
}

const numberTuple = createArrTupleWithGeneric(1, 2);
const mixTuple = createArrTupleWithGeneric('2', 2);
const objTuple = createArrTupleWithGeneric({ id: 123 }, { id: 1243 })


// example
const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        course: 'Next Level Web Development',
        ...studentInfo
    }
}

const student1 = {
    id: 1234,
    name: 'Al-amin',
    hasPen: true
}

const student2 = {
    id: 12345,
    name: 'Abdullah',
    hasPen: true,
    hasCar: true
}

const newStudent = addStudentToCourse(student2);
console.log(newStudent)