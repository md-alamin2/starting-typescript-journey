// js-ts
// string, number, boolean, undefined, null

// ts: never, unknown, void

// string type
let Name : string = "John Doe";
Name = "Jane Smith";
// name = 42; // Error: Type 'number' is not assignable to type 'string'

// number type
let age : number = 30;
age = 31;
// age = "thirty"; // Error: Type 'string' is not assignable to type 'number'

// boolean type
let isStudent : boolean = true;
isStudent = false;
// isStudent = "yes"; // Error: Type 'string' is not assignable to type 'boolean'

// undefined type
let address : undefined = undefined;
// address = "123 Main St"; // Error: Type 'string' is not assignable to type 'undefined'

// null type
let phoneNumber : null = null;
// phoneNumber = 1234567890; // Error: Type 'number' is not assignable to type 'null'

console.log(Name, age, isStudent, address, phoneNumber);