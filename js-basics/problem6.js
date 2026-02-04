// 6. Group people by city

let arrayOfData = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]

let groupByCity = {};

arrayOfData.forEach(person => {
    if (!groupByCity[person.city]) {
        groupByCity[person.city] = [];
    }
    groupByCity[person.city].push(person.name);
});
console.log(groupByCity);