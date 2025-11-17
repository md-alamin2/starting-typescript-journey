// nullable

const user = (input: string | null) => {

    user ? console.log(`User input is: ${user}`) : console.log('No user input provided');

}

user('Hello World'); // Output: User input is: Hello World
user(null); // Output: No user input provided

// unknown

const discountCalculator = (price: number, discount: unknown) => {
    if (typeof discount === 'number') {
        const discountedPrice = price - (price * discount / 100);
    } else {
        console.log('invalid input')
    }
}

discountCalculator(1000, 15); // valid
discountCalculator(1000, '20%'); // Output: invalid input

// never: void

const throwError = (mesg: string):never =>{
    throw new Error(mesg);
}

throwError('This is a critical error'); // Output: Uncaught Error: This is a critical error