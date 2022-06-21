//머신 코드 - testcase는 다 통과하지만 이상하게 틀렸다는군요
const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/Algorithm/-Algorithm-Training/.vscode/BOJ_Study_JS/test.txt').toString().split('');

console.log(input);

let answer = 0;
let i = 0;
input.forEach((ele) => {
    if (isUpperCase(ele)) {
        if (i > 0) {
            answer += i%4 ? 4-(i%4) : 0;
        }
        i = 0;
    }
    i ++;
})

console.log(answer);

function isUpperCase(str) {
    if(str == str.toUpperCase()) return true;
    return false
}