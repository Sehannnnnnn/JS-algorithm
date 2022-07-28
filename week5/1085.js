const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week5/input.txt').toString().trim().split(' ');

const [x,y,w,h] = input.map(e => +e);

const a = w-x;
const b = h-y;

console.log(Math.min(x,y,a,b));
