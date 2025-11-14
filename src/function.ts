// function

// normal, arrow

// normal function
function addNormal(num1: number, num2: number): number {
    return num1 + num2;
}

// addNormal(5, '5') // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

// addArrow(5, '5') // Error: Argument of type 'string' is not assignable to parameter of type 'number'


// object => function => method

const me = {
    name: 'Al-amin',
    age: 24,
    balance: 5000,
    addBalance(money: number): number {
        return this.balance + money;
    }
}

console.log(me.addBalance(50))

// me.addBalance('50') // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// array => function => callback function
const arrNum: number[] = [1, 2, 3, 4, 5];

const sqrArr = arrNum.map((num: number): number => num * num);

console.log(sqrArr);