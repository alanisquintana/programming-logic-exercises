/* 
You are planning your day and want to choose an activity to do. Create a program that asks the user which activity they want to do, such as 'read a book', 'play sports', 'watch a movie', or 'cook'. Based on the choice, provide a suggestion on how to make the most of the time.
*/

const userActivity = prompt("Choose an activity: read a book, play sports, watch a movie or cook.").toLowerCase()

switch (userActivity) {
    case "read a book":
        alert("Find a quiet, comfortable spot where you won't be interrupted. Make sure you have good lighting and a cozy chair to enhance your reading experience.")
        break
    case "play sports":
        alert("Warm up properly to avoid injuries. Set a specific goal for your session and stay hydrated. Consider playing with a friend to make it more enjoyable.")
        break
    case "watch a movie":
        alert("Choose a movie you've been wanting to see. Prepare some snacks, dim the lights, and create a cozy atmosphere to fully immerse yourself in the film.")
        break
    case "cook":
        alert("Gather all ingredients and tools before starting. Follow the recipe step-by-step, and take your time to enjoy the cooking process. Play some music to make it more fun.")
        break
    
    default:
        alert("Invalid answer.")
        break
}