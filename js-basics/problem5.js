// 5. Flatten object of arrays into one array

let originalObjectArray = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

let newArray = [...originalObjectArray.fruits, ...originalObjectArray.veggies];
console.log(newArray);