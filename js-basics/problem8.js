// 8. Find student with highest average mark

let score = { A: [80, 90], B: [70, 75, 85] };
for (let student in score) {
    score[student].reduce((acc, val) => acc + val, 0)/score[student].length;
}
if (score['A'] > score['B']) {
    console.log('A');
}else{
    console.log('B');
}