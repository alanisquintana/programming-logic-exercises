/* 
You are developing a finance program and need to calculate the accumulated balance from a list of transactions. Write a program that uses a loop to calculate the accumulated balance.
*/

const transactions = [25, -10, 80, 5, -25, -7, 90]
let balance = 0
let counter = 0

while (counter < transactions.length) {
    balance += transactions[counter]
    counter++
}