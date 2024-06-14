/* 
You are a teacher and want to calculate the average grades of your students. Return the average of the grades in the array.
*/

const grades = [8, 7, 6, 9, 5]
let sum = 0 

for (let i = 0; i < grades.length; i++) {
    sum += grades[i]
}

const average = sum / grades.length
console.log(average)