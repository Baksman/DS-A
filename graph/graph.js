// adjancency list

class Graph {
    constructor() {
        this.adjancencyList = {};
    }

    addVertex(newVertex) {
        if (!this.adjancencyList[newVertex])
            this.adjancencyList[newVertex] = [];
    }

    addEdge(v1, v2) {
        this.adjancencyList[v2].push(v1);
        this.adjancencyList[v1].push(v2);

    }

    removeEdge(v1, v2) {
        this.adjancencyList[v1] = this.adjancencyList[v1].filter(v => v !== v2);

        this.adjancencyList[v2] = this.adjancencyList[v2].filter(v => v !== v1)

    }

    depthFirstSearchRecursive(start) {
        const result = [];
        const visited = {};
        const adjancencyList = this.adjancencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjancencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });

        })(start);

        return result;
    }

    dfsIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (stack.length) {
            console.log(stack);
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjancencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                }
            })
        }
    }

    removeVertex(vertex) {
        while (this.adjancencyList[vertex].length > 0) {
            const adjacentVertex = this.adjancencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex)
            // this.adjancencyList[adjacentVertex] = this.adjancencyList[adjacentVertex].filter(v => v !== adjacentVertex)
        }
        delete this.adjancencyList[vertex]
    }
}