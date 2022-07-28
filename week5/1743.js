const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week5/input.txt').toString().trim().split('\n');

const [N,M,K] = input[0].split(' ').map(e=>+e);
const trashs = input.splice(1,K);
const arr = Array.from({length : N}, () => Array.from({length : M}, () => 0));
let max = 0;
let size;


trashs.forEach((trash) => {
    let [x,y] = trash.split(' ').map(e => +e);
    arr[x-1][y-1] = 1;
})

trashs.forEach((trash) => {
    let [x,y] = trash.split(' ').map(e => e-1);
    size = 0;
    checktrash([x,y]);
    max = size > max ? size : max;
})


function checktrash([x,y]) {
    if (x<0 || x>N-1 || y<0 || y>M-1 || arr[x][y] == 0) {
        return;
    }
    arr[x][y] = 0;
    size = size+1;
    checktrash([x+1,y]);
    checktrash([x,y+1]);
    checktrash([x-1,y]);
    checktrash([x,y-1]);
}

console.log(max);