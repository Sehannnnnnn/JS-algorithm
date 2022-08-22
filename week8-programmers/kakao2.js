function solution(board, moves) {
    var answer = 0;
    const stack = [];
    moves.forEach(num => {
        let doll = pick(board, num);
        if (doll == 0) {
            //아무것도 실행x
        }
        else if (doll == stack[stack.length-1]) {
            stack.pop();
            answer += 2;
        } else {
            stack.push(doll);
        }
    })
    return answer;
}

function pick (board, num) {
    let item;
    for (let line of board) {
        if (line[num-1] > 0) {
            let a = line[num-1]
            line[num-1] = 0;
            return a;
        }
    }
    return 0;
}