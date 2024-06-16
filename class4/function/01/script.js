/* 
Imagine you're developing an app for a time machine. In this context, you need to create a function called calculateTimeTravelerAge that takes the birth year and the year the person traveled in time, and returns the person's age at the time they arrived.

Define the function calculateTimeTravelerAge which accepts two parameters: birthYear and yearTraveled.
Inside the function, calculate the person's age at the time of time travel.
Assume that the time machine does not consider leap years to simplify the calculation.
*/

const birthYear = Number(prompt("What is your birth year?"))
const yearTraveled = Number(prompt("What year did you travel in time?"))

function calculateTimeTravelerAge(birthYear, yearTraveled) {
    const age = yearTraveled - birthYear
    return age
}

const travelerAge = calculateTimeTravelerAge(birthYear, yearTraveled)
alert(`Traveler age at the travel time: ${travelerAge}`)