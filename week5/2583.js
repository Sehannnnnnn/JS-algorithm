const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week5/input.txt').toString().trim().split('\n');

const [M,N,K] = input[0].split(' ').map(e => +e);

const map = Array.from({length : N}, () => Array.from({length : M}, () => 0))

for (let i = 1; i<K+1; i++) {
    const [x1,y1,x2,y2] = input[i].split(' ').map(e => +e);
    for (let w = x1; w<x2; w++) {
        for (let h = y1; h <y2; h++) {
            if (map[w][h] == 0) map[w][h] = 1;
        }
    }
}

function DFS (x,y) {
    if (x < 0 || x == N || y < 0|| y == M || map[x][y] == 1) {
        return;
    }
    map[x][y] = 1;
    size ++;
    DFS(x+1,y);
    DFS(x-1,y);
    DFS(x,y+1);
    DFS(x,y-1);
}

let size;
let answer = [];
for (let i = 0; i<N; i++) {
    for (let j = 0; j<M; j++) {
        size = 0;
        if (map[i][j] == 0) DFS(i,j);
        if (size > 0) answer.push(size);
    }
}
console.log(answer.length);
console.log(answer.sort((a,b) => a-b).join(' '));
