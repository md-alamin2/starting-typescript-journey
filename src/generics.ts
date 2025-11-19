// dynamically generalize

type GenericArray<T> = Array<T>


// const friends : string[] = ['Alice', 'Bob', 'Charlie'];
const friends: GenericArray<string> = ['Alice', 'Bob', 'Charlie'];

// const rollNumbers : number[] = [1, 2, 3,];
const rollNumbers: GenericArray<number> = [1, 2, 3,];

// const isEligible : boolean[] = [true, false, true]
const isEligible: GenericArray<boolean> = [true, false, true];

// generic arr of obj
const user: GenericArray<{ name: string; age: number }> = [
    {
        name: 'john',
        age: 20
    },
    {
        name: 'ali',
        age: 30
    }]

// generic in tuple
type GenericType<X, Y> = [X, Y];

const couple1: GenericType<string, number> = ['Alice', 30];
const couple2: GenericType<boolean, string> = [true, 'Bob'];