const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week3/input.txt').toString().trim().split('\n');

const N = input.shift();

const dict = {};
let max = 1;

input.forEach((book) => {
    if(!dict[book]) dict[book] = 1;
    else {
        let a = dict[book];
        dict[book] = a+1;
        if (a+1 > max) max = a+1;
    }
})


const answer = Object.keys(dict).filter((book) => dict[book] == max).sort()

console.log(answer[0]);