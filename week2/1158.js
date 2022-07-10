const fs = require('fs');
let [N, K] = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week2/input.txt').toString().split(' ').map(e => +e);

let yoshepus = [];
let numList = [];

for (let i = 1; i<N+1; i++) {
    numList.push(i);
}
let i;
while (numList.length > 0) {
    if (numList.length < K) { 
        i = K % numList.length ? K % numList.length : numList.length;
    }
    else {
        i = K
    }
    numList.splice(0,i-1).forEach(e => {
        numList.push(e);
    })   
    yoshepus.push(numList.shift());
    console.log(numList);
}

console.log('<'+ yoshepus.join(', ') + '>')