const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week6/input.txt').toString().trim().split('\n');

const T = Number(input[0]);
const moveX = [1,2,2,1,-1,-2,-2,-1];
const moveY = [2,1,-1,-2,-2,-1,1,2];
for (let i = 1; i<T*3+1; i=i+3) {
    solution(
        +input[i]
        ,input[i+1].split(' ').map(v=>+v)
        ,input[i+2].split(' ').map(v=>+v)
        )
}

function solution(n, start, end) {
    const arr = Array.from({length: n}, () => Array.from({length: n}, () => 0));
    const N = n;
    moveKnite([start], end, arr, N);
};

function moveKnite(starts, end, arr, N) {
    while (starts.length !== 0) {
        let [x,y] = starts.shift();
        if (x == end[0] && y == end[1]) break;
        for (let i = 0; i<8; i++) {
            let [newX, newY] = [x+moveX[i], y+moveY[i]]
            if (newX >= 0 && newX < N && newY >= 0 && newY < N && arr[newX][newY] == 0) {
                arr[newX][newY] = arr[x][y] + 1;
                starts.push([newX, newY]);
            }
        }
    }
    console.log(arr[end[0]][end[1]])
}


// function moveKnite(starts,end,arr,N) {
//     if (starts.length == 0 || finish || starts[0][0] == end[0] && starts[0][1] == end[0]) return;
//     newStarts = [];
//     starts.forEach((point) => {
//         let [x,y] = point;
//         for (let i = 0; i<8; i++) {
//             let [newX, newY] = [x+moveX[i], y+moveY[i]]
//             // console.log(newX, newY);
//             if (newX >= 0 && newX < N && newY >= 0 && newY < N && arr[newX][newY] == 0) {
//                 //접근 가능 x,y
//                 if (newX == end[0] && newY == end[1]) {
//                     finish = true;
//                     break;
//                 }
//                 arr[newX][newY] = 1;
//                 newStarts.push([newX, newY]);
//                 // console.log(arr);
//             }
//             else continue;
//         }
//     })
//     k++;
//     // console.log(k, '번쨰 이동', newStarts);
//     moveKnite(newStarts, end, arr, N);
// }
