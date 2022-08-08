const fs = require('fs');
let [X,Y] = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week6/input.txt').toString().trim().split(' ').map(v => +v);
let queue = [[X,0]];
let log = Array.from({length: 100100}, () => false);

while (queue.length) {
    let [pos, step] = queue.shift();
    if (log[pos]) continue;
    if (pos == Y) {
        console.log(step);
        break;
    }
    else {
        log[pos] = true;
        let nextpos = [[pos*2, step+1],[pos+1, step+1],[pos-1, step+1]];
        nextpos.forEach((v,i) => {
            if (!log[v[0]]) {
                queue.push(v);
                log[v[0]] = true;
            }
        })
    }
    
}



// const log = new Map();
// log.set(0, [X]);
// let level = 0;
// let stop = false;
// while (!stop) {
//     if (X == Y) break;
//     const parent = log.get(level);
//     level ++;
//     parent.forEach((v,i) => {
//         split(v, Y, log, level);
//     })
// }

// function split (x, y, map, level) {
//     let child = [2*x, x+1, x-1];
//     const parent = map.get(level-1);
//     // child = child.filter(x => !parent.includes(x))
//     let a = map.get(level) ?? [];
//     a = a.concat(child);
//     map.set(level, a);
//     if (child.includes(y)) return stop = true;
// }

// console.log(level);

