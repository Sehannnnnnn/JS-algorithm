const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/JS-algorithm/week8-programmers/input.txt').toString().trim().split('\n');

const [R,C,K] = input.shift().split(' ').map(e => +e);
const MAP = input.map(line => line.split(''));

const B = K-(R+C-1);


// createMoves(R,C,B);

function createMoves(R,C,B) {
    const movesbase = [];
    for (let i = 0 ; i<R; i++) {
        movesbase.push('up');
    }
    for (let i = 0; i<C; i++) {
        movesbase.push('right');
    }
    let moves = trashmove(B);
    moves = moves.map(move => 
        move.concat(movesbase)
    )
    moves.forEach(directions => {
        let map = MAP;
        const output = [];
        permutation([], directions, output, directions);
        console.log(output);
        // checkMovement(directions,R-1,0,map,0)
    })
    //각 movement 조합의 permutation을 구한 뒤
}

function trashmove (B) {
    if (B == 0) {return [[]]}
    let trashmove = [];
    for (let j = 0; j<B+1; j++) {
        let move = []
        for (let i = j; i<B; i++) {
            move.push(...['right', 'left'])
        }
        for (let k = B-j; k<B; k++) {
            move.push(...['up', 'down'])
        }
        trashmove.push(move);
    }
    return trashmove;
}

function checkMovement (directions,x,y,map,k) {
    console.log(directions[k], x,y);
    console.log(map);
    if (x < 0 || x == R || y < 0 || y == C || map[x][y] == 'T') return false;
    if (k == K) {
        console.log(x,y);
        return true;
    }
    map[x][y] = 'T';
    switch (directions[k]) {
        case 'right':
            checkMovement (directions, x, y+1, map, k+1);
            break;
        case 'left':
            checkMovement (directions, x, y-1, map, k+1);
            break;
        case 'up':
            checkMovement (directions, x-1, y, map, k+1);
            break;
        case 'down':
            checkMovement (directions, x+1, y, map, k+1);
            break
    }
}

function permutation (permu, rests, output, len) {
    if (permu.length == len) {
        return output.includes(permu) || output.push(permu);
    }
    rests.forEach((v,idx) => {
        const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
        permutation([...permu,v], rest, output, len);
    })
}
const output = [];
permutation([], ['right','left','right','left'], output, 4);
console.log(output);

