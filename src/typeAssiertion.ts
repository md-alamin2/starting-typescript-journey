// type assertion

const kgToGmConverter = (input: number | string): string | number | undefined => {
    if (typeof input === 'number') {
        return input * 1000;
    } else if (typeof input === 'string') {
        const [value] = input.split(' ');
        return `converted value is: ${Number(value) * 1000} gm`;
    }
}

const result1 = kgToGmConverter(5) as number; // type assertion with 'as' keyword
console.log(result1); // Output: 5000 
const result2 = kgToGmConverter('7 kg') as string; // type assertion with 'as' keyword
console.log(result2); // Output: converted value is: 7000 gm;


type CustomError={
    message : string;
}

try {
    
} catch (error) {
    console.log((error as CustomError).message)
}