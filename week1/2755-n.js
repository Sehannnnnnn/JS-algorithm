//소수점 계산 오류
const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week1/input.txt').toString().split('\n');

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
    a = +a;
    let score = table[b];
    answer += myRound2(score*a);
    n += a;
    answer = myRound2(answer);
    console.log(a, score, answer);
}
console.log(myRound2(answer/n));


function myRound2 (num) {
    num *= 100;
    if (num - parseInt(num) >= 0.5) return (parseInt(num) +1)/100;
    else return parseInt(num)/100;
} 