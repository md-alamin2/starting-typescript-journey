// array, object.

// ts -> tuple

const bazarList = ['Eggs', 'Milk', 'Bread'];

bazarList.push('Ghee');
// bazarList.push(5) it will throw error because bazarList is string array

const mixedArr = [1, 'Two', 3, 'Four'];
mixedArr.push(5);
mixedArr.push('Six');
// mixedArr.push(true) it will throw error because mixedArr is number and string array

// tuple
let person: [string, number, boolean] = ['Alice', 25, true];
person[0] = 'Bob';
person[1] = 30;
person[2] = false;
// person[0] = 100; // Error: Type 'number' is not assignable to type 'string'
// person[1] = 'Thirty'; // Error: Type 'string' is not assignable to type 'number'
// person[2] = 'yes'; // Error: Type 'string' is not assignable to type 'boolean'
const couple: [string, string] = ['husband', 'wife'];
// const couple : [string, string] = ['husband']; // Error: Source has 1 element(s) but target requires 2

// object

const user: {
    worksAt: 'Softvance Agency'; // value => type: literal type
    readonly role: string; // access modifier -> we can not change the value of readonly property
    firstName: String;
    middleName?: String; //optional property-> we can make property optional by adding "?". it will not throw error if we don't provide this property
    lastName: String;
    married: boolean;
} = {
    worksAt: 'Softvance Agency', // if we change the value it will throw error
    role: 'Developer', 
    firstName: 'MD.',
    lastName: 'Al-Amin',
    married: false
}

//  user.role = 'Manager'; // Error: Cannot assign to 'role' because it is a read-only property
console.log(user)