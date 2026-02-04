// 4. Find the largest value key

let value = { a: 10, b: 50, c: 20 }

let largestValue = null;
let largestKey = null;
for (let key in value) {
    if (largestValue === null || value[key]>largestValue){
        largestValue = value[key];
        largestKey = key;
    }else{
        continue;
    }
}
console.log(largestKey);