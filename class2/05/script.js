/* 
You received an array of numbers but want to remove all the odd numbers. Return a new array with only the even numbers.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((n) => {
    return n % 2 === 0
})

console.log(evenNumbers)