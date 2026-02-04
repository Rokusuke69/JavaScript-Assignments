//1. Sum values in object arrays
let obj1 = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };
obj1.food = obj1.food.reduce((acc, val) => acc + val, 0);
obj1.travel = obj1.travel.reduce((acc, val) => acc + val, 0);
obj1.bills = obj1.bills.reduce((acc, val) => acc + val, 0);
console.log(obj1);