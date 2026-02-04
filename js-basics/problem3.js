// 3. Swap keys and values of object
let originalObj = { a: "x", b: "y", c: "z" }

let swapedOnj = {};

for (let key in originalObj) {
    swapedObj[originalObj[key]] = key;
}
console.log(swapedObj);