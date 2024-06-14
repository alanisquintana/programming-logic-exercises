/* 
You are creating a game segment and want to ensure that the player enters a valid response. Write code that uses a loop to prompt the player to enter a number between 1 and 5 until they provide a valid response (a value between 1 and 5).
*/

const userNumberInput = Number(prompt("Enter a number between 1 and 5."))

while (userNumberInput < 1 || userNumberInput > 5) {
    userNumberInput = Number(prompt("Enter a number between 1 and 5."))
}