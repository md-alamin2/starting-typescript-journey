// mapped types

const numbers: number[] = [1, 2, 3, 4];
// const numbers2: string[]= ['1', '2', '3', '4'] -> create this array with map

const arrayOfNumberString: string[] = numbers.map(num => num.toString());
console.log(arrayOfNumberString);

type Area<T> = {
    [key in keyof T] : T[key];
    // key >> hight >> string
    // key >> width >> number
}

/**
 * T==>>> {hight: string; width: number}
 */

const newArea : Area<{hight: string; width: number}>={
    hight: '30',
    width: 20
}