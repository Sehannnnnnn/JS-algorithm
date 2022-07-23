//머신 코드 - testcase는 다 통과하지만 이상하게 틀렸다는군요
//한 명령에 경우 같은 개수 파라미터
const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week1/input.txt').toString().split('');

let i = 0;
arr = [];
input.forEach((str, idx) => {
        while (isUpperCase(str) && (idx + i) % 4 !== 0) {
            i++;
        }
})

console.log(i)

function isUpperCase(str) {
    if(str == str.toUpperCase()) return true;
    return false
}