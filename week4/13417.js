const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week4/input.txt').toString().split('\n');

const T = input.shift();
let answers = [];
for (let j = 0; j < T*2; j = j+2) {
    answers.push(solution(input[j], input[j+1]))
}

function solution (N, str) {
    str = str.split(' ');
    let answer = str.shift();
    for (let i = 1; i<N; i++) {
        if (answer[0] >= str[0]) {
            answer = str.shift() + answer;
        }
        else {
            answer = answer + str.shift();
        }
    }
    return answer;
}

console.log(answers.join('\n'));