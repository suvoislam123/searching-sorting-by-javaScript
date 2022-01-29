let tstl = require('tstl');
let bfs = (adjMatrix,root)=>{
    let n = nodes.length;
    let queue = new tstl.Queue();
    let visited = new Array(n);
    visited.fill(0);
    let result = [];
    queue.push(root);
    while(!queue.empty()){
        let curr = queue.front();
        queue.pop();
        visited[curr] = true;
        result.push(curr);
        for(let i=0;i<n;i++)
        {
            if(adjMatrix[curr][i]===1  && !visited[i]){
                queue.push(i)

            }
        }
    }
    return result;
};


var adjMatrix = [
    //     ['Arad','Zerind','Timisoara','Oradea','Logof','Sibue',
    // 'Mehedia','Drobeta','Craiova','Pitesti','Fagaras','Riminical Vilcea',
    // 'Bucharest','Giurgea','Urzicenti'],
    // ['Arad','Zerind','Timisoara','Oradea','Logof','Sibue',
    // 'Mehedia','Drobeta','Craiova','Pitesti','Fagaras','Riminical Vilcea',
    // 'Bucharest','Giurgea','Urzicenti'],
    [0,1,1,0,0,1,0,0,0,0,0,0,0,0,0],
    [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,1,0,0,0,0,0,0,0],
    [1,0,0,1,0,0,0,0,0,0,1,1,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,1,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,1,1,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,1,0,0,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0]
    ];
    var nodes = ['Arad','Zerind','Timisoara','Oradea','Logof','Sibue',
'Mehedia','Drobeta','Craiova','Pitesti','Fagaras','Riminical Vilcea',
'Bucharest','Giurgea','Urzicenti'

];
let i = nodes.indexOf('Timisoara');
let r = bfs(adjMatrix,i);
console.log(r);
var str = [];
var c;
console.log("Here We set Starting node as Timisoara and Goal Node Pitesti");
var g = nodes.indexOf('Pitesti');
foorloop: for(let i=0;i<r.length;i++)
{
    c= r[i];
    str.push(nodes[c]);
    if(g==c){
        break foorloop;
    }

    
}
console.log(str);
