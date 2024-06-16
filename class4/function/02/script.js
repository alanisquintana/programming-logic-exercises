/* 
Imagine you're creating a BMI calculator for a health app. Develop a function called calculateBMI that takes weight (in kilograms) and height (in meters) as parameters and returns the calculated BMI.

Define the calculateBMI function that accepts two parameters: weight and height.
Inside the function, calculate the BMI using the formula: BMI = weight / (height * height).
*/

const weight = Number(prompt("What is your weight?"))
const height = Number(prompt("What is your height?"))

function calculateBMI(weight, height) {
    const BMI = weight / (height * height)
    return BMI
}

const userBMI = calculateBMI(weight, height)
console.log(`Your BMI is ${userBMI.toFixed(1)}`);