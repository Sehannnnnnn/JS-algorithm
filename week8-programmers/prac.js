function trashmove (B) {
    let trashmove = [];
    T = 2
    for (let j = 0; j<T+1; j++) {
        let move = []
        for (let i = j; i<T; i++) {
            move.push(...['right', 'left'])
        }
        for (let k = T-j; k<T; k++) {
            move.push(...['up', 'down'])
        }
        trashmove.push(move);
    }
    console.log(trashmove);
}

trashmove(1)