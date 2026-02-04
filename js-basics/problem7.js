// 7. Filter object by values > 50

let obj1 = { a: 20, b: 60, c: 40, d: 90 }
let filteredObj = {};
for (let key in obj1) {
    if (obj1[key] > 50) {
        filteredObj[key] = obj1[key];
    }
}
console.log(filteredObj);