/* 
For a security system, you need to create a random password generator. Develop a function called generateRandomPassword that takes no parameters and returns a random password consisting of uppercase letters, lowercase letters, and numbers.

Define the generateRandomPassword function without parameters.
Inside the function, create an eight-character random password by combining uppercase letters, lowercase letters, and numbers.
*/

function generateRandomPassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let password = ""

    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        password += characters.charAt(randomIndex)
    }
    return password
}

const generatedPassword = generateRandomPassword()
console.log("Generated password: ", generatedPassword);