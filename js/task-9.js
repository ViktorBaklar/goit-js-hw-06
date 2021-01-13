import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  return users
  .sort((a, b) => a.friends.length - b.friends.length)
  .reduce((userNames, user) => {
    userNames.push(user.name);
      return userNames;
    }, []);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]