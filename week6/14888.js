const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week6/input.txt').toString().trim().split('\n');

const T = Number(input[0]);
const numbers = input[1].split(' ').map(v => +v);
const operaters = input[2].split(' ').map(v => +v);
// 0 => +
// 1 => -
// 2 => *
// 3 => /
const oper = ['+','-','*','/']
const queue = [];
operaters.forEach((v,i) => {
    for (let j = 0; j<v; j++) {
        queue.push(i);
    }
})
// console.log(queue);
// const output = [];
const calcul = [];
const permutation = (permu, rests, num1, L) => {
    let num2 = numbers[L];
    L++;
    if (permu.length == queue.length) {
        calcul.push(num1);
        return 
        // // return;
    }
    rests.forEach((v,idx) => {
        const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
        let num;
        if (v == 0) {
            num = num1 + num2;
        }
        else if (v == 1) {
            num = num1 - num2;
        }
        else if (v == 2) {
            num = num1 * num2;
        }
        else if (v == 3) {
            if (num1 >=0) {
                num = Math.floor(num1/num2);
            }
            else {
                num = Math.floor((-1)*num1/num2)
                if (num > 0) num = num*(-1);
            }
        }
        permutation([...permu,v],rest, num, L);
    });
}
permutation([], queue, numbers[0], 1);
// console.log(output)
console.log(Math.max(...calcul));
console.log(Math.min(...calcul));