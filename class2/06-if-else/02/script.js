/* 
You are a student on your way to school. Depending on the weather, you may decide the most suitable means of transportation. Ask the user if it's raining. If it is, display 'Take an umbrella!'. If it's not, display 'Go by bike!'.
*/

const weather = prompt("It is raining right now?").toLowerCase()

if (weather === "yes"){
    alert("Take an umbrella!")
} else if(weather === "no"){
    alert("Go by bike!")
} else {
    alert("Not a valid answer.")
}