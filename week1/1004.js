const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/Algorithm/-Algorithm-Training/BOJ_Study_JS/week1/input.txt').toString().split('\n');

const T = Number(input.shift());

for (let i = 0; i<T ; i++) {
    let x1, y1, x2, y2;
    [x1, y1, x2, y2] = input.shift().split(' ').map(e => +e);
    let pNum = input.shift();
    let pts = input.splice(0, pNum);

    let answer = 0;
    for (let pt of pts) {
        const in1 = inPlanet(pt, x1, y1);
        const in2 = inPlanet(pt, x2, y2);
        if (!in1 && in2) {
            answer++;
        } else if (in1 && !in2) {
            answer++;
        }
    }
    console.log(answer);
}


function inPlanet (pt, x, y) {
    let xp, yp, d;
    [xp, yp, d] = pt.split(' ').map(e => +e)
    return ((xp-x)**2 + (yp-y)**2) >= d**2 ? false : true;
}

