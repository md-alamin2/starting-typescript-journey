"use strict";
// array, object.
Object.defineProperty(exports, "__esModule", { value: true });
// ts -> tuple
const bazarList = ['Eggs', 'Milk', 'Bread'];
bazarList.push('Ghee');
// bazarList.push(5) it will throw error because bazarList is string array
const mixedArr = [1, 'Two', 3, 'Four'];
mixedArr.push(5);
mixedArr.push('Six');
// mixedArr.push(true) it will throw error because mixedArr is number and string array
// tuple
let person = ['Alice', 25, true];
person[0] = 'Bob';
person[1] = 30;
person[2] = false;
// person[0] = 100; // Error: Type 'number' is not assignable to type 'string'
// person[1] = 'Thirty'; // Error: Type 'string' is not assignable to type 'number'
// person[2] = 'yes'; // Error: Type 'string' is not assignable to type 'boolean'
const couple = ['husband', 'wife'];
// const couple : [string, string] = ['husband']; // Error: Source has 1 element(s) but target requires 2
// object
const user = {
    worksAt: 'Softvance Agency', // if we change the value it will throw error
    role: 'Developer',
    firstName: 'MD.',
    lastName: 'Al-Amin',
    married: false
};
//  user.role = 'Manager'; // Error: Cannot assign to 'role' because it is a read-only property
console.log(user);
//# sourceMappingURL=nonPrimitive.js.map