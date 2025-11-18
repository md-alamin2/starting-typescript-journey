type user = {
    name: string;
    age: number;
}

type role = {
    role: 'admin' | 'user';
}

// interface 
// we can only use interface to object type definition like : array, function, object etc.
interface IUser {
    name: string;
    age: number;
}

type userWithRole = user & role;

// intersection of interfaces
interface IUserWithRole extends IUser {
    role: 'admin' | 'user';
}

const user1: IUserWithRole = {
    name: 'John Doe',
    age: 30,
    role: 'user'
}

const user2: userWithRole = {
    name: 'Jane Smith',
    age: 25,
    role: 'admin'
}


// function interface

type addFunc = (num1: number, num2: number) => number;

interface IAddFunc {
    (num1: number, num2: number): number;
}

const add: IAddFunc = (num1, num2) => {
    return num1 + num2;
}

console.log(add(10, 20)); // Output: 30


// array interface

type stringArray = string[];

interface IStringArray{
    [index: number] : string;
}

const names: IStringArray = ['Alice', 'Bob', 'Charlie'];

console.log(names[1]); // Output: Bob