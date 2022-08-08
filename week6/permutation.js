const numbers = ['a','a','b','c'];

const output = [];
const permutation = (permu, rests) => {
    if (permu.length == numbers.length) {
        return output.push(permu);
    }
    rests.forEach((v,idx) => {
        const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
        permutation([...permu,v],rest);
    });
}

permutation([], numbers);
console.log(output);