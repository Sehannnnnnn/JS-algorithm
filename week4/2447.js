const N = 27
let stars = Array.from({length: N}, () => Array.from({length: N}, () => "*"));


deleteStar(N, 0, 0)
function deleteStar (N,x,y) {
    console.log(N,x,y,"실행됨")
    if (N == 1) {
        return;
    }
    for (let i = 0; i<N; i++) {
        for (let j = 0; j<N; j++) {
            if ((2*N/3 > i && N/3 <= i) && (2*N/3 > j && N/3 <= j)) {
                stars[x+i][y+j] = " "
            }
        }
    }
    deleteStar(N/3, x, y);
    deleteStar(N/3, x, y+N/3);
    deleteStar(N/3, x, y+2*N/3);
    deleteStar(N/3, x+N/3, y);
    // deleteStar(N/3, x+N/3, y+N/3);
    deleteStar(N/3, x+N/3, y+2*N/3);
    deleteStar(N/3, x+2*N/3, y);
    deleteStar(N/3, x+2*N/3, y+N/3);
    deleteStar(N/3, x+2*N/3, y+2*N/3);
    
}

let answer = ""
for (let i = 0; i<N; i++) {
    for (let j = 0; j<N; j++) {
        answer += stars[i][j];
    }
    answer += "\n"
}

console.log(answer);