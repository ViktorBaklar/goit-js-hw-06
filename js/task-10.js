import users from './users.js';

const getSortedUniqueSkills = users => {
  return users
  .reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills;
  }, [])
  .reduce((uniqueSkills, skill) => {
    if (!uniqueSkills.includes(skill)) {
      uniqueSkills.push(skill);
    }
    return uniqueSkills
  }, [])
  .sort();
};


console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]