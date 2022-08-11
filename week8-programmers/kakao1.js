function solution(s) {
    var answer = 0;
    const LEN = s.length/2+1;
    const answers = [];
    for (let k = 1; k<LEN; k++) {
        const array = readyCompress(s, k);
        answers.push(compress(array));
    }
    return Math.min(...answers);
}

function readyCompress(s, i) {
    const arr = [];
    for (let j = 0; j < s.length; j +=i) {
        arr.push(s.substr(j, i))
    }
    return arr.reverse();
}

function compress(arr) {
    let newword = "";
    let i = 1;
    let a = arr.pop();
    while (arr.length > 0) {
        if (a == arr[arr.length-1]) {
            arr.pop();
            i ++;
        }
        else {
            i > 1 ? newword += `${i}${a}` : newword+=a;

            a = arr.pop();
            i = 1;
        }
    }
    i > 1 ? newword += `${i}${a}` : newword+=a
    return newword.length;
}