const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week4/input.txt').toString()

let stack = 0;
let lazor = true;
let answer = 0;

for (let i of input) {
    if (i == "(") {
        stack ++;
        lazor = true;
        continue;
    }
    if (i == ")") {
        if (lazor) {
            stack --;
            answer += stack;
            lazor = false;
        } else {
            stack --;
            answer ++;
        }
    }
}

console.log(answer);