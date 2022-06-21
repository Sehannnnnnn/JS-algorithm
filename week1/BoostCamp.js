const arr = [3, 2, 4, 4, 2, 5, 2, 5, 5];

function solution(arr) {
    let answer = [];
    arr = arr.sort();
    let set = new Set(arr);

    set.forEach(ele => {
        answer.push(arr.filter(x => x == ele).length)
    })
    answer = answer.filter(x => x > 1);

    if (answer.length == 0) {
        answer = [-1]
    }
    console.log(answer);
}

solution(arr);