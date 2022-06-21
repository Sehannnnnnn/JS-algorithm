//피자 메뉴판 문제
const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let i = 1;
while (input.length !== 0) {
    let count = input[0];
    input.shift();
    let pizzas = input.splice(0, count);
    let bestV = 0, bestD = 0;
    pizzas.forEach((ele, idx) => {
        let a, b;
        [a, b] = ele.split(" ");
        let value = ((a**2) * 3.14 * 1/4)/b;
        if (value > bestV) {
            bestV = value;
            bestD = a;
        }
        if (idx === pizzas.length-1) console.log(`Menu ${i}: ${bestD}`)
    })
    i++;
}
