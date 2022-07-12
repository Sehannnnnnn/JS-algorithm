const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week3/input.txt').toString().split('\n');

const N = input.shift();

const dict = new Map();
let max = 0;

input.forEach((book) => {
    let a = dict.get(book) || 0;
    dict.set(book, a+1);
    if (a == max) max++;
})


console.log(Array.from(dict.keys()).filter((book) => dict.get(book) == max).sort().shift())