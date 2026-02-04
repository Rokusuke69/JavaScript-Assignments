// 10. Pick only given keys [name, city] from object 
let obj1 = { name: "Rahul", age: 23, city: "Noida" };

let keysToPick = ['name', 'city'];
let newObj = {};

for (let key of keysToPick) {
    if (obj1[key]) {
        newObj[key] = obj1[key];
    }
}
console.log(newObj);