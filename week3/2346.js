const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week3/input.txt').toString().split('\n')

const N = Number(input[0]);
let numPapers = input[1].split(' ');
let ballons = Array.from({length : N}, (v,i) => i+1);

let pos;
let move, piece;
let answer = "";

while (ballons.length > 0) {
    pos = ballons.shift();
    answer += `${pos} `
    move = numPapers[pos-1];
    if (move > 0) {
        piece = ballons.splice(0, move-1);
        ballons = ballons.concat(piece);
    } else {
        piece = ballons.splice(-move);
        ballons = piece.concat(ballons);
    }
    console.log(ballons);
}

console.log(answer);