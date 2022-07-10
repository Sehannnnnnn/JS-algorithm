// 좋은 단어
const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week2/input.txt').toString().split('\n');

const N = Number(input.shift());
let answer = 0;
let stack = [];
let top = "";

for (let i = 0; i<N; i ++) {
    input[i].split('').forEach((char) => {
        top = stack.at(-1);
        if (top == char) stack.pop();
        else stack.push(char);
    })
    if (stack.length == 0) answer ++;
    stack = [];
}

console.log(answer);