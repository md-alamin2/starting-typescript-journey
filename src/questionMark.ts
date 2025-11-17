// ? : ternary operator : decision making

const eligibleForVote = (age: number) => {
    return age >= 18 ? 'Eligible for vote' : 'Not eligible for vote';
}

console.log(eligibleForVote(18)); // Output: Eligible for vote



// ??: nullish coalescing operator => returns right side value if left side is null or undefined;

const theme = undefined;

const userTheme = theme ?? 'light mode';

console.log(userTheme); // Output: light mode



// ?. : optional chaining operator

const user: {
    id: number;
    name: string;
    address: {
        street: string;
        city: string;
    }
}={
    id: 101,
    name: 'John Doe',
    address:{
        street: '123 Main St',
        city: 'Metropolis'
    }
};

// const postalCode = user.address?.postalCode;

// console.log(postalCode);  Output: undefined



