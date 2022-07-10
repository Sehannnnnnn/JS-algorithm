const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week2/input.txt').toString().split('\n');

const n = Number(input[0]);

let t = 0;
let dict = {
    0: [n]
}

while (true) {
    t ++;
    dict[t] = [];
    for (let n of dict[t-1]) {
        if (n == 1) return console.log(t-1);
        if (n == 0) continue; 
        n % 3 == 0 && dict[t].push(n / 3);
        n % 2 == 0 && dict[t].push(n / 2);
        dict[t].push(n-1);
    }
    console.log(dict)
}


