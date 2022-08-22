//조합 구하기
const combination = (N, comb, rests, output) => {
    if (rests.length == 0) {
        if (comb.length == N) return output.push(comb);
        return
    }
    const rest = [...rests.slice(1)];
    combination(N, [...comb, rests[0]], rest, output);
    combination(N, [...comb], rest, output);
}

const output = [];
combination(3, [], ['a','b','c','d'], output)
console.log(output);