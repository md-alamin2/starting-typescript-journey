// type alias

type User = { // defining a type alias
    ID: number
    name: {
        firstName: string;
        lastName: string
    },
    age: number,
    gender: 'male' | 'female', // union type
    address: {
        division: string;
        city: string
    }
}

const user1: User = { // using the type alias
    ID: 5678,
    name: {
        firstName: 'MD.',
        lastName: "Al-Amin"
    },
    age: 24,
    gender: 'male',
    address: {
        division: 'Dhaka',
        city: 'Dhaka'
    }
}

// type alias for function

type AddFunc = (num1: number, num2: number) => number


const add: AddFunc = (num1, num2)=>{
    return num1 + num2
}

console.log(add(12, 23));