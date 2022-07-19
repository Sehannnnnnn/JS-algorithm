const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week4/input.txt').toString().trim().split('\n');

const T = input.shift();

for (let i = 0; i<T*2; i=i+2) {
    solution(input[i].split(' '), input[i+1].split(' ').map((e) => +e));
}

function solution ([N, M], importants) {
    let out, max, cutIdx, piece, piece2;
    let count = 0;
    let idxArr = Array.from({length : +N}, (v, i) => i);
    while (true) {
        max = Math.max(...importants);
        cutIdx = importants.indexOf(max);
        piece = importants.splice(0,cutIdx);
        piece2 = idxArr.splice(0, cutIdx);
        importants.shift();
        out = idxArr.shift();
        importants = importants.concat(piece);
        idxArr = idxArr.concat(piece2);
        count ++;
        if (out == M) {
            console.log(count);
            break;
        }
    }    
}