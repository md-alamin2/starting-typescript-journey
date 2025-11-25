"use strict";
// obj destructuring
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 1234,
    name: {
        firstName: 'MD.',
        lastName: 'Al-Amin'
    },
    age: 20,
    married: false,
    profession: 'Web Developer'
};
const { id, name: { firstName, lastName }, // nested destructuring
age, married: maritalStatus, // name alias 
profession } = user;
console.log(`Hello I'm ${firstName + lastName}, I'm ${age} years old. I'am a ${profession}`);
// array destructuring
const friend = ['Samiul', 'Sanower', 'Jamal', 'Kamal', 'Abul', 'Babul'];
const [, // if you want to skip any item
secondFriend, thirdFriend] = friend;
console.log(thirdFriend);
//# sourceMappingURL=destructuring.js.map