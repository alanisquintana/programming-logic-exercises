/* 
You are developing a purchase form for the book 'JavaScript for Beginners' and need to ensure that the user provides the desired quantity. Create a program that asks the user to enter the quantity and, if not provided, assigns the default value of 1. Display the final quantity in the console.
*/

const userBookQuantityInput = Number(prompt("How many books do you want to buy?"))

const defaultValue = 1
const userBookQuantity = userBookQuantityInput ?? defaultValue

console.log(userBookQuantity);