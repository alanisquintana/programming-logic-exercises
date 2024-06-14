/* 
You want to refactor the previous program that generates a list of prime numbers in the range of 1 to 20. Rewrite your code using a for loop to print the prime numbers within this range.
*/

let number = 2

for (let i = 1; i <= 20; i++) {
    let isPrime = true

    for (let j = 2; j < number; j++) {
        if (number % j === 0) {
            isPrime = false
            break}
    }

    if (isPrime) {
        console.log(number);
    }

    number++
}