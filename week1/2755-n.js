//소수점 계산 오류
const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/Algorithm/-Algorithm-Training/.vscode/BOJ_Study_JS/test.txt').toString().split('\n');

const T = input[0];

const table = {
    'A+' : 4.3,
    'A0' : 4.0,
    'A-' : 3.7,
    'B+' : 3.3,
    'B0' : 3.0,
    'B-' : 2.7,
    'C+' : 2.3,
    'C0' : 2.0,
    'C-' : 1.7,
    'D+' : 1.3,
    'D0' : 1.0,
    'D-' : 0.7,
    'F' : 0.0
}

let answer = 0;
let n = 0;
for (let i = 1; i<=T; i++) {
    let a,  b;
    [a, b] = input[i].split(" ").filter((e,i) => i == 2 || i == 1);
    c = +(a*table[b]).toFixed(2);
    answer += c
    n += +a;
}
console.log(Math.round(answer/n * 100) / 100);
//소수점 연산에서의 오류
// 해결방법까지 블로그에 정리할 것