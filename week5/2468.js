const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week5/input.txt').toString().trim().split('\n');

const T = Number(input[0]);
const map = [];
let checker = Array.from({length : T}, () => Array.from({length : T}, () => 0));

let max = 0;
for (let i = 1; i<T+1; i++) {
    let line = input[i].split(' ').map(e => +e);
    map.push(line);
    max = Math.max(max, ...line)
}

let size, areas, answer;
answer = 0;
for (let k = 1; k<max; k++) {
    console.log('현재 수위', k);
    checker = Array.from({length : T}, () => Array.from({length : T}, () => 0));
    areas = 0;
    for (let i = 0; i<T; i++) {
        for (let j = 0; j<T; j++) {
            if (map[i][j] >= k || checker[i][j] == 0) {
                size = 0;
                DFS(i,j,k);
            }
            if (size > 0) {
                areas ++;
            }
        }
    }
    console.log(k, '에서', checker, areas)
    answer < areas ? answer = areas : answer = answer; 
}console.log(answer);

function DFS (x,y,k) {
    if (x < 0 || x == T || y < 0 || y == T || map[x][y] <= k || checker[x][y] == 1) {
        return;
    }
    console.log('현재 방문', x,y, map[x][y], '<= 이곳 수위');
    checker[x][y] = 1;
    size ++; 
    DFS(x+1,y,k);
    DFS(x,y+1,k);
    DFS(x-1,y,k);
    DFS(x,y-1,k);
};
