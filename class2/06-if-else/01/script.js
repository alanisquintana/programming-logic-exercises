/* 
Imagine you are the security guard of an exclusive club. Customers must be over 18 years old to enter. Create a program that checks the customer's age and allows or denies access based on this condition. Write code that prompts the customer for their age. If the age is 18 or older, display 'Access granted!'. Otherwise, display 'Access denied!'.
*/

const age = prompt("What is your age?")
    
    if (age >= 18){
        alert("Access granted!")
    } else {
        alert("Access denied!");
    }