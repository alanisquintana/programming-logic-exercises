/* 
In a weather application, it's necessary to convert temperatures between Celsius and Fahrenheit. Create a function called convertTemperature that takes the temperature and the unit (Celsius or Fahrenheit) as parameters and returns the converted temperature.

Define the function convertTemperature that accepts two parameters: temperature and unit.
Inside the function, convert the temperature from Celsius to Fahrenheit if the unit is 'C', and from Fahrenheit to Celsius if the unit is 'F'.
*/

const temperature = Number(prompt("What is the temperature?"))
const unit = prompt("What is the unit?").toUpperCase

function convertTemperature(temperature, unit) {
    if (unit === "C") {
        return (temperature * 9 / 5) + 32;
    } else if (unit === "F") {
        return (temperatura - 32) * 5 / 9;
    } else {
        return "Invalid temperature unit.";
      }
}

const convertedTemperature = convertTemperature(temperature, unit)
console.log("Converted temperature: ", convertedTemperature);