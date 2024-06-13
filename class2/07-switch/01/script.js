/* 
You are at a fruit market and want to choose a fruit to buy. Create a program that, based on the chosen fruit, displays a message about the benefits of that fruit.
Create a program that asks the user to choose between 'apple', 'banana', 'grape', and 'orange'. Based on the choice, display a message highlighting the benefits of the chosen fruit.

apple: Apples are rich in fiber and antioxidants.
banana: Bananas are an excellent source of potassium.
grape: Grapes contain antioxidants and are good for the heart.
orange: Oranges are rich in vitamin C, great for the immune system.
*/

const userChosenFruit = prompt("Choose a fruit: apple, banana, grape or orange.").toLowerCase()

switch (userChosenFruit) {
    case "apple":
        alert("Apples are rich in fiber and antioxidants.")
        break
    case "banana":
        alert("Bananas are an excellent source of potassium.")
        break
    case "grape":
        alert("Grapes contain antioxidants and are good for the heart.")
        break
    case "orange":
        alert("Oranges are rich in vitamin C, great for the immune system.")
        break
    default:
        alert("Invalid answer.")
        break
}