/* 
In a mathematical system, it's necessary to check if a number is prime. Create a function called isPrime that takes a number as a parameter and returns true if the number is prime and false if it's not.

Define the function isPrime that accepts a parameter number.
Inside the function, check if the number is prime. If it is, return true; otherwise, return false.
*/

const number = Number(prompt("Write a number between 1 and 10."))

function isPrime(number) {
    if (number % 2 === 0) {
        return false
    } else {
        return true
    }
}

console.log(isPrime(number));