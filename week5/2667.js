//DFS 이다 이것이
const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week5/input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const map = input.slice(1,N+1).map(e => e.split('').map((e) => +e));
let size;
const answer = [];

for (let i = 0; i<N; i++) {
    for (let j = 0; j<N; j++) {
        size = 0;
        if (map[i][j] !== 0) {
            check(i,j);
        }
        if (size > 0) answer.push(size);
    }
}
function check (x,y) {
    if (x == N || x == -1 || y == -1 || y == N || map[x][y] == 0) {
        return;
    }
    else {
        map[x][y] = 0;
        size ++;
        check(x,y+1);
        check(x+1,y);
        check(x-1,y);
        check(x,y-1);
    }
}
console.log(answer.length);
console.log(answer.sort((a,b) => a-b).join('\n'));