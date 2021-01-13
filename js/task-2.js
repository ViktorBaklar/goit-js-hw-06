import users from './users.js';

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color)
  //return users.map(user => user.name);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]