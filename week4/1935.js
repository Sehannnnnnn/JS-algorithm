const e = require('express');
const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week4/input.txt').toString().trim().split('\n');

const N = input[0];
const priFix = input[1];
const numbers = input.splice(2, N).map(e => +e)
console.log(numbers);
const map = new Map();
const stack = [];
let i = 0;

let a, b, c;
for (let ele of priFix) {
    switch(ele) {
        case '+':
            b = +stack.pop();
            c = +stack.pop();
            stack.push((c + b).toFixed(2));
            break;
        case '-':
            b = +stack.pop();
            c = +stack.pop();
            stack.push((c - b).toFixed(2));
            break;
        case '*':
            b = +stack.pop();
            c = +stack.pop();
            stack.push((c * b).toFixed(2));
            break;
        case '/':
            b = +stack.pop();
            c = +stack.pop();
            stack.push((c / b).toFixed(2));
            break;
        default:
            map.get(ele) ?? map.set(ele, numbers[i++]);
            a = map.get(ele);
            stack.push(a);
            break;
    }
    //반올림만 처리하면 통과
    console.log(stack[0])
}