"use strict";
// mapped types
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3, 4];
// const numbers2: string[]= ['1', '2', '3', '4'] -> create this array with map
const arrayOfNumberString = numbers.map(num => num.toString());
console.log(arrayOfNumberString);
/**
 * T==>>> {hight: string; width: number}
 */
const newArea = {
    hight: '30',
    width: 20
};
//# sourceMappingURL=mapped.js.map