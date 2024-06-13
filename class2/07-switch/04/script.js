/* 
You are developing a number analysis tool and need to classify a value provided by the user into a specific range. Create a program that, based on the provided value, determines which range the number falls into. Ask the user to provide a number. Classify the number into one of the following ranges:

Range 1: Numbers from 1 to 10
Range 2: Numbers from 11 to 20
Range 3: Numbers from 21 to 30
Range 4: Numbers greater than 30
*/

const numberInput = Number(prompt("Write a number greater than 0."))

switch (numberInput) {
    case numberInput >= 1 && numberInput <= 10:
        alert("Your number belongs to Range 1.")
        break
    case numberInput >= 11 && numberInput <= 20:
        alert("Your number belongs to Range 2.")
        break
    case numberInput >= 21 && numberInput <= 30:
        alert("Your number belongs to Range 3.")
        break
    case numberInput >= 31:
        alert("Your number belongs to Range 4.")
        break

    default:
        alert("Not a valid number.")
        break
}