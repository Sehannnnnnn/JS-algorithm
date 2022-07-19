//폴리노미오 미해결
const fs = require('fs');
let input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week1/input.txt').toString().trim();


const splited = input.split(".").filter(str => str.includes("X"));
let possible = true;

for (let str of splited) {
    let len = str.length;
    console.log(str, len);
    if (len % 4 == 0) {
        input = input.replace(str, "A".repeat(len))
    }
    else if (len % 4 == 2) {
        input = input.replace(str, "A".repeat(len-2)+"B".repeat(2))
    }
    else {
        possible = false;
        break;
    }
}

if (possible) {
    console.log(input);
} else {
    console.log(-1);
}
