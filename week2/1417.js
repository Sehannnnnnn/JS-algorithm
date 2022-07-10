const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week2/input.txt').toString().split('\n');

const N = Number(input[0]);
const votes = input.splice(1, N).map(e => +e);


let my = votes.shift();
let max = Math.max(...votes);
let answer = 0;

console.log(my, max);
while (my <= max) {
    votes[votes.indexOf(max)]--;
    my ++;
    answer ++;
    max = Math.max(...votes);
    console.log('my: ', my);
    console.log('votes : ', votes);
}

console.log(answer);
