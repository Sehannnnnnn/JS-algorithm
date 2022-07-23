const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week4/input.txt').toString().trim().split('\n');

const [N,M] = input[0].split(' ').map(e => +e);
const map = new Map();
const subs = [];
let answer = 0;
//입력 값 저장
for (let i = 1; i<N+1; i++) {
    map.set(input[i], []);
}

for (let i = N+1; i < N+M+1; i++) {
    subs.push(input[i]);
}


map.forEach((value, key) => {
    subs.forEach((sub) => {
        console.log(key.includes(sub), key, sub);
    })
})
