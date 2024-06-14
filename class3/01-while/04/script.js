/* 
You want to generate a list of prime numbers in the range of 1 to 20. Write a program that uses a loop to print the prime numbers within this range.
*/

let number = 2

do {
    let isPrime = true
    let divider = 2
    
    while (divider <= (number / 2)) {
    if (number % divider === 0) {
        isPrime = false
        break
    }
    divider++
    }

    if (isPrime) {
        console.log(number)
    }

    number++

} while (number <= 20)