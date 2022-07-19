//미해결 에러케이스 찾을수없음
const fs = require('fs');
const input =  fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week1/input.txt').toString().trim().split('\n');

//input part
let points = [];
for (let j = 0 ; j < 3; j ++) {
    points.push(input[j].split(" "))
}


let temp = 0;
let max = [];
let edges = [[0,1],[1,2],[2,0]];

for (let j = 0; j < 3; j ++) {
    let i = (j+1) % 3;
    let p = (points[j][0] - points[i][0])**2 + (points[j][1] - points[i][1])**2
    if (temp <= p) {
        max = edges[j];
        temp = p;
    }
}
const shorts = edges.filter(e => e != max);

console.log(typeOfTrinangle(max, shorts));
   
function typeOfTrinangle(max, shorts) {
    let c2 = (points[max[0]][0] - points[max[1]][0])**2 + (points[max[0]][1] - points[max[1]][1])**2 ;
    let a2 = (points[shorts[0][0]][0] - points[shorts[0][1]][0])**2 + (points[shorts[0][0]][1] - points[shorts[0][1]][1])**2
    let b2 = (points[shorts[1][0]][0] - points[shorts[1][1]][0])**2 + (points[shorts[1][0]][1] - points[shorts[1][1]][1])**2
    if (c2 - a2 - b2 >= 2*(+Math.sqrt(a2*b2).toFixed())) return "X";
    if (a2 == b2 && c2 == b2 && c2 == a2) return "JungTriangle"
    if (a2 == b2 || c2 == b2 || c2 == a2) {
        return c2 > a2+b2 ? "Dunkak2Triangle" : c2 == a2+b2 ? "Jikkak2Triangle" : "Yeakak2Triangle"
    }
    return c2 > a2+b2 ? "DunkakTriangle" : c2 == a2+b2 ? "JikkakTriangle" : "YeakakTriangle"
}

