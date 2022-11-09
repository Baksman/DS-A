

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }

}

class BST {
    constructor() {
        this.root = null;
    }

    find(value) {
        if (this.root == null) {
            return false;
        }
        let current = this.root;
        let found = false;

        while (!found && current != null) {
            if (value <  current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found;
    }

    insertViaRecursion(value) {
        var newNode = Node(value);

        if (node == null) {
            return newNode;
        }
        if (node.left.value < node.root.value) {
            var newNode = Node(value);
            _insertAt(root, newNode);
        }
    }

    _insertAt(root, value) {

        if (node == null) {
            return newNode;
        }
        if (newNode.value < root.left) {
            _insertAt(root.left, value)
        } else if (newNode.value > root.right) {
            _insertAt(node.right, value)
        }
    }

    insert(value) {
        var newNode = Node(value);
        if (this.root == null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left == null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right == null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }

            }
        }
    }

    BFS() {
        var data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }


    DFSPreOrder() {
        let data = [];
        var current = this.root;

        function traverse(node) {
            data.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }

        }
        traverse(current);
        return data;

    }

    DFSPostOrder() {
        let data = [];
        var current = this.root;

        function traverse(node) {
            data.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }

        }
        traverse(current);
        return data;

    }

    DFSInOrder() {
        let data = [];
        var current = this.root;

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            data.push(node.value);
            if (node.right) {
                traverse(node.right);
            }

        }
        traverse(current);
        return data;

    }

}

var tree = new BST();
tree.root = Node(10);
tree.root.left = Node(7);
tree.root.right = Node(12);