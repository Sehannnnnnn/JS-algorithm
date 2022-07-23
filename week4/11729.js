const fs = require('fs');
const N = Number(fs.readFileSync().toString().trim())

let answer = 0;
let log = "";
hanoi(N, 1,2,3);
console.log(answer);
console.log(log);
function hanoi (N, start, mid, to) {
    answer ++;
    if (N==1) {
        return log += `${start} ${to}\n`;
    }
    hanoi(N-1, start, to, mid);
    log += `${start} ${to}\n`;
    hanoi(N-1, mid, start, to);
}
