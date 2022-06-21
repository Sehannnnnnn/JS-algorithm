const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/Algorithm/-Algorithm-Training/.vscode/BOJ_Study_JS/input.txt').toString().split('\n');

let N, T;
[N, T] = input[0].split(' ');

const nums = input[1].split(' ').map(ele => +ele);
let queue = [];

for (let i = 1; i <=N; i++) {
    queue.push(i);
}

// console.log(queue);
let answer = 0;
for (let num of nums) {
    let k = queue.indexOf(num);
    // console.log('k:', k);
    if (N-k > k) {
        for (let i = 0; i < k; i++) {
            queue = right(queue);
            // console.log('right 실행:', queue)
        } answer += k;
    } else {
        for (let i = 0; i < N-k; i++) {
            queue = left(queue);
            // console.log('left 실행: ', queue)
        } answer += N-k;
    } 
    queue.shift();
    // console.log(`${num} 제거 : ${queue}`);
    N = queue.length;
}

console.log(answer);

function left(arr) {
    arr.unshift(arr.pop());
    return arr;
}

function right(arr) {
    arr.push(arr.shift());
    return arr;
}