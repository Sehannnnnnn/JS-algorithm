const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week4/input.txt').toString().trim().split('\n')

const N = Number(input[0]);
const board = input.splice(1,N).map(line => line.split(' ').map(e => +e));
let blue = 0;
let white = 0;
solution(N, 0, 0);

function solution (n, x, y) {
    let color = board[x][y];
    for (let i = 0; i<n; i++) {
        for (let j = 0; j<n; j++) {
            // console.log(x+i,"행", y+j, "열", board[x+i][y+j] )
            if (board[x+i][y+j] != color) {
                divide(n,x,y);
                return;
            }
        }
    }
    if (color == 0) white ++;
    else blue++;
}

function divide (n, x, y) {
    n=n/2
    solution(n, x, y);
    solution(n, x, y+n);
    solution(n, x+n, y);
    solution(n, x+n, y+n);
}

console.log(white+'\n'+blue);