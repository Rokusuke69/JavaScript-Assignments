// 12. Sort object entries by values (ascending)

let obj1 = { a: 3, b: 1, c: 2 }

let sortedArray = Object.entries(obj1).sort(([, a], [, b]) => a - b);

console.log(sortedArray);