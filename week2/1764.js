const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week2/input.txt').toString().split('\n')

// input.shift();

// const set = new Set(input);

// set.forEach(e => {
//     input.splice(input.indexOf(e), 1)
// })

// input.sort();
// console.log(input.length);
// console.log(input.join('\n'));

const [N, M] = input.shift().split(' ').map(e => +e);

const map = new Map();
const dudbo = [];
let len = 0
input.forEach((ele) => {
    if (map.has(ele)) {
        dudbo.push(ele);
        len ++;
    } else {
        map.set(ele, 1);
    }
})
dudbo.sort();

console.log(len)
console.log(dudbo.join('\n'))