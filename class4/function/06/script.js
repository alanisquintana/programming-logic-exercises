/* 
You're building a data analysis system and need to create a function called analyzeNumbers that takes a list of numbers as a parameter and returns information about that list, such as sum, average, and the largest number.

Define the function analyzeNumbers that accepts a parameter numbers, a list of numbers.
Inside the function, calculate and return the sum, average, and the largest number from the list.
*/

function analyzeNumbers(numbers) {
    let sum = 0
    let largestNumber = numbers[0]

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]

        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i]
          }
    }

    let average = sum / numbers.length

    return {
        sum: sum,
        average: average.toFixed(2),
        largestNumber: largestNumber
    }
}

const analyzedNumbers = analyzeNumbers([12, 5, 8, 22, 15])
console.log("Sum: " + analyzedNumbers.sum)
console.log("Average: " + analyzedNumbers.average)
console.log("Largest Number: " + analyzedNumbers.largestNumber)