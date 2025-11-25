"use strict";
// type assertion
Object.defineProperty(exports, "__esModule", { value: true });
const kgToGmConverter = (input) => {
    if (typeof input === 'number') {
        return input * 1000;
    }
    else if (typeof input === 'string') {
        const [value] = input.split(' ');
        return `converted value is: ${Number(value) * 1000} gm`;
    }
};
const result1 = kgToGmConverter(5); // type assertion with 'as' keyword
console.log(result1); // Output: 5000 
const result2 = kgToGmConverter('7 kg'); // type assertion with 'as' keyword
console.log(result2); // Output: converted value is: 7000 gm;
try {
}
catch (error) {
    console.log(error.message);
}
//# sourceMappingURL=typeAssiertion.js.map