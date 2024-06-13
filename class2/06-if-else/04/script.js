/* 
As a coach, you want to provide more detailed recommendations based on the athletes' energy levels. In addition to suggesting whether they should train or not, you want to give personalized advice depending on their energy level.
Create a program that asks the athlete about their energy level on a scale from 1 to 10. Based on this level, provide more detailed recommendations on whether they should train intensely, do a moderate workout, or rest to recover.
*/

const userEnergyLevel = Number(prompt("What is your current energy level from 1 to 10?"))

if (userEnergyLevel >= 8) {
    alert("You should train intensely.")
} else if (userEnergyLevel >= 4) {
    alert("You should do a moderate workout.")
} else if (userEnergyLevel >= 1) {
    alert("You should rest to recover.")
} else {
    alert("Not a valid number.")
}