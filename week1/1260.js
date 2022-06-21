const fs = require('fs');
const input = fs.readFileSync('/Users/gimsehan/Develop/Algorithm/-Algorithm-Training/BOJ_Study_JS/week1/input.txt').toString().split('\n');

let N, M, V;
[N,M,V] = input[0].split(' ').map(e => +e);
let nodes = input.splice(1,M).map(e => e.split(' ').map(e => +e));
nodes.sort((a,b) => a[1] - b[1]) ;
nodes.sort((a,b) => a[0] - b[0]);
console.log(nodes);

DFS(nodes,N,M,V);
function DFS (nodes, n, m , v) {
    let t = [];
    t.push(v);
    while (t.length !== n) {
        let node = nodes[nodes.map(e => e[0]).indexOf(v)] ?? nodes[nodes.map(e => e[1]).indexOf(v)];
        if (node == undefined) {
            console.log('뒤 노드 찾기')
            v = t[t.indexOf(v)-1];
            continue;
        }
        console.log('node', node);
        temp = node.filter(e => !t.includes(e));
        console.log('temp:', temp);
        //방문 가능한 node 가 업을 때. -> node가 []
        if (temp.length === 0) {
            console.log('다른 노드 찾기')
            nodes = nodes.filter(n => n !== node)
            console.log('v: ', v);
        } else {
            v = temp[0];
            t.push(v);
            console.log('v:', v);
            nodes = nodes.filter(n => n !== node)
        }
        console.log('nodes:', nodes)
        console.log('t:',t);
        console.log('\n');
    }
    return t.toString();
}





