//폴리노미오 미해결
const fs = require('fs');
let input = fs.readFileSync('/Users/gimsehan/Develop/Algorithm/-Algorithm-Training/.vscode/BOJ_Study_JS/test.txt').toString()


const splited = input.split(".").filter(str => str.includes("X"));

function solution (splited, input) {
    if (splited.length == 0) return -1; 
    for (str of splited) {
        let len = str.length;
        if (len % 4 == 0) {input = input.replace(str, "A".repeat(len))}
        else if (len % 4 == 2) {input = input.replace(str, "A".repeat(len-2)+"B".repeat(2))}
        else return -1;
    } return input;
}

console.log(solution(splited, input));