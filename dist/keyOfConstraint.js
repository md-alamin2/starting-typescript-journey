"use strict";
//  keyOf: type operator
Object.defineProperty(exports, "__esModule", { value: true });
const myBike = 'bike';
const user = {
    id: 222,
    name: 'Al-amin',
    address: {
        city: "Dhaka"
    }
};
// const myId = user.id; 
const myId = user['id']; // another way to access obj data
const myName = user['name'];
const address = user['address'];
const getPropertyFormObj = (obj, key) => {
    return obj[key];
};
const result1 = getPropertyFormObj(user, 'id');
const product = {
    brand: 'hp'
};
const result2 = getPropertyFormObj(product, 'brand');
console.log(result1);
console.log(result2);
//# sourceMappingURL=keyOfConstraint.js.map