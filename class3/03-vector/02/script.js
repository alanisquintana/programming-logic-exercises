/* 
You are developing an age verification system. You receive an array of users with age information. Check if all users are at least 18 years old and return a list of users who are under 25 years old.
*/

const users = [
  { age: 25 },
  { age: 30 },
  { age: 22 },
  { age: 19 },
]

const usersOverEighteen = users.every(users => users.age >= 18)
console.log(`All of users are at least 18 years old?:`, usersOverEighteen)

const usersUnderTwentyFive = users.filter(users => users.age < 25)
console.log(`Users under 25:`, usersUnderTwentyFive)