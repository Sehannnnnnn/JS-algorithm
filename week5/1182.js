const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week5/input.txt').toString().trim().split('\n');

const [N,S] = input[0].split(' ').map(e => +e);
const arr = input[1].split(' ')
let answer = 0;

div(0, 0, S, arr);

function div (a, i, s, array) {
    if (i == N) {
        if (a == s) answer ++;
        return;
    }
    div(a, i+1, s, array)
    let b = a + array[i];
    div(b, i+1, s, array);
}

console.log(S == 0 ? answer - 1 : answer);