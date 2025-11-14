// spread operator

// array spread

const friends = ['sanower', 'samiul'];
const schoolFriends = ['abul', 'babul', 'kabul'];
const collageFriends = ['jamal', 'kamal', 'lamal'];

friends.push(...schoolFriends);
friends.push(...collageFriends);
console.log(friends)


// object spread

const user = {
    name: 'Al-Amin',
    age: 24,
    address: 'Dhaka, Bangladesh'
}

const otherInfo = {
    profession: 'Web Developer',
    company: 'Softvance Agency'
}

const userInfo = {...user, ...otherInfo};
console.log(userInfo);


// rest operator

const sendInvitation = (...friends: string[])=>{
 friends.forEach(friend=>{
    console.log(`Invitation sent to ${friend}`)
 })
}

sendInvitation('Al-Amin', 'Samiul', 'Sanower', 'Jamal', 'Kamal');