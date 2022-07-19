const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week3/input.txt').toString().split('\n');

const N = input.shift();
let lefts = Array.from({length : N}, (v,i) => i+1);
let queue = [];
let log = [];
let isPossible = true;

for (let i = 0; i<N; i++) {
    let num = +input[i];
    if (pushorpop(num,queue) == false) {
        isPossible = false
        break;
    }
}
if (isPossible) console.log(log.join('\n'))
else console.log('NO')

function pushorpop (n, queue) {
    let top = queue.at(-1) || 0;
    while (true) {
        if (top >= n) {
            queue.pop();
            log.push('-');
            if (top = n) {
                break;
            }
        } if (top < n) {
            let d = lefts.shift()
            if (d == undefined){ 
                return false;
             } 
            queue.push(d);
            log.push('+');
            } 
        top = queue.at(-1);
    }
    return true
} 

function printAnswer () {

}