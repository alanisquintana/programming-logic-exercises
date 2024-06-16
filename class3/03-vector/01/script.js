/* 
You are building a user management system. All users are added to an array usuarios, and each object represents one of these users. Each object has the properties nome, email, and idade. Write code that checks if the user 'Alice' exists and finds the index of the user with the email 'carlos@example.com'.
*/

const users = [
    { name: "John", email: "john@example.com", age: 25 },
    { name: "Alice", email: "alice@example.com", age: 30 },
    { name: "Carl", email: "carl@example.com", age: 22 }
  ];

const userFound = users.find(user => user.name === "Alice")
const IndexFound = users.findIndex(user => user.email === "carlos@example.com")