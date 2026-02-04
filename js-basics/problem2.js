//2. Count word occurrences in array
let words = ["apple", "banana", "apple", "orange", "banana", "apple"]
let wordCount = {};

for(let word of words){
    wordCount[word] = (wordCount[word] || 0) + 1;
}
console.log(wordCount);

