/* 
You are developing a user management system and need to list the properties of an object representing a user. Create a program that uses a for-in loop to iterate over the properties of a user object and print them to the console.
*/

const user = {
    name: "Alanis",
    age: 20,
    email: "alanis@example.com"
    };

for (const userData in user) {
    console.log(`${userData}: ${user[userData]}`);
}