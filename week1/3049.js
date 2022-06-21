//다각형 대각선의 교점 구하기
// n각형의 대각선 교점 수  = nC4

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const num = Number(input);


console.log(num*(num-1)*(num-2)*(num-3)/24);
