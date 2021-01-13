import users from './users.js';

const getUsersWithFriend = (users, friendName) => users 
.filter(user => user.friends.includes(friendName))
.reduce((userNames, user) => {
  userNames.push(user.name);
    return userNames;
  }, []);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]