let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const visited = [...Array(100001)].fill(0);

const getFastestFindTime = (start, end) => {
  const queue = [[start, 0]];
  while (queue.length) {
    const [pos, time] = queue.shift();
    if (visited[pos]) continue;
    if (pos === end) return time;
    for (const move of [pos + 1, pos - 1, pos * 2]) {
      !visited[move] &&
        move >= 0 &&
        move <= 100000 &&
        queue.push([move, time + 1]);
    }
    visited[pos] = 1;
  }
};

console.log(getFastestFindTime(N, K));


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

