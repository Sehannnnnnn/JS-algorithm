const fs = require('fs');
const logList = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week2/input.txt').toString().split('\n').map(e => e.split(' '));

logList.shift();

//map 사용
let logmap = new Map(logList);
let result = [];

logmap.forEach((value, key) => {
    if (value == 'enter') result.push(key);
})

result.sort().reverse();

console.log(result.join('\n'));

// object 사용
// const N = Number(input[0]);
// const loglist = input.splice(1, N).map(e => e.split(' '));

// let record = {};

// for (let [name, log] of loglist) {
//     record[name] = log;
// }

// const enterList = Object.keys(record).filter(name => record[name] == 'enter');
