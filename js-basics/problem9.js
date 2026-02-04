// 9. Unique values across all object arrays
let obj1 = { x: [1,2,3], y: [2,3,4], z: [4,5] };

let newArray = [];

for (let keys in obj1){
    for(let values of obj1[keys]){
        if(!newArray.includes(values)){
            newArray.push(values);
        }else{
            continue;
        }
    }
}
console.log(newArray);