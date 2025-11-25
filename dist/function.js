"use strict";
// function
Object.defineProperty(exports, "__esModule", { value: true });
// normal, arrow
// normal function
function addNormal(num1, num2) {
    return num1 + num2;
}
// addNormal(5, '5') // Error: Argument of type 'string' is not assignable to parameter of type 'number'
// arrow function
const addArrow = (num1, num2) => num1 + num2;
// addArrow(5, '5') // Error: Argument of type 'string' is not assignable to parameter of type 'number'
// object => function => method
const me = {
    name: 'Al-amin',
    age: 24,
    balance: 5000,
    addBalance(money) {
        return this.balance + money;
    }
};
console.log(me.addBalance(50));
// me.addBalance('50') // Error: Argument of type 'string' is not assignable to parameter of type 'number'
// array => function => callback function
const arrNum = [1, 2, 3, 4, 5];
const sqrArr = arrNum.map((num) => num * num);
console.log(sqrArr);
//# sourceMappingURL=function.js.map