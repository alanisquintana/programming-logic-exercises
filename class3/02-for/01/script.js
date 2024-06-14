/* 
You are making a shopping list and want to ensure that you don't forget anything. Return a unique shopping list with no duplicate items.
*/

const listOne = ["Apple", "Banana", "Milk", "Eggs"];
const listTwo = ["Banana", "Eggs", "Rice", "Beans"];
const uniqueList = listOne

for (fruit of listTwo) {
    if (!uniqueList.includes(fruit)) {
        uniqueList.push(fruit)
    }
}    

console.log(uniqueList);