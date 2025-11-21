//  keyOf: type operator

type reachPeopleVehicle = {
    bike: string;
    car: string;
    cng: string;
}

type vehicle1 = 'bike' | 'car' | 'cng';
type vehicle2 = keyof reachPeopleVehicle; // declare type with keyof another type

const myBike: vehicle2 = 'bike'

// typeOf constraint

type User = {
    id: number;
    name: string;
    address: {
        city: string
    }
}

const user = {
    id: 222,
    name: 'Al-amin',
    address: {
        city: "Dhaka"
    }
}

// const myId = user.id; 
const myId = user['id']; // another way to access obj data
const myName = user['name'];
const address = user['address'];

const getPropertyFormObj = <X> (obj: X, key: keyof X) => {
    return obj[key]
}

const result1 = getPropertyFormObj(user, 'id');

const product = {
    brand:'hp'
}

const result2 = getPropertyFormObj(product, 'brand');

console.log(result1)
console.log(result2)