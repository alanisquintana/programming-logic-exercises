/* 
You are creating an inventory system and need to record the name of a new product. Create a program that asks the user to provide the product name and, if not provided, assigns the default value 'Unnamed Product'.
*/

const userProductNameInput = prompt("What is the product name?")

const defaultProductName = "Unnamed Product"
const userProductName = userProductNameInput ?? defaultProductName