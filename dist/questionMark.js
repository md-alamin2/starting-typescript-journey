"use strict";
// ? : ternary operator : decision making
Object.defineProperty(exports, "__esModule", { value: true });
const eligibleForVote = (age) => {
    return age >= 18 ? 'Eligible for vote' : 'Not eligible for vote';
};
console.log(eligibleForVote(18)); // Output: Eligible for vote
// ??: nullish coalescing operator => returns right side value if left side is null or undefined;
const theme = undefined;
const userTheme = theme ?? 'light mode';
console.log(userTheme); // Output: light mode
// ?. : optional chaining operator
const user = {
    id: 101,
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Metropolis'
    }
};
// const postalCode = user.address?.postalCode;
// console.log(postalCode);  Output: undefined
//# sourceMappingURL=questionMark.js.map