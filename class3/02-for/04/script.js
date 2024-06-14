/* 
You are building a financial system and need to calculate the total sum of a list of transactions. Create a program that uses a for-of loop to iterate over the elements of an array of transactions and calculate the total sum.
*/

const transactions = [120, -50, 30, -20, 40]
let sum = 0

for (const value of transactions) {
    sum += value
}

console.log(sum);