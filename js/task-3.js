import users from './users.js';

const getUsersWithGender = (users, gender) => users 
  .filter(user => user.gender === gender)
  .reduce((userNames, user) => {
    userNames.push(user.name);
      return userNames;
    }, []);
  
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]