function BinarySearchTree() {

    let Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    let root = null;

    let insertNode = function(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    this.insert = function(key) {
        let newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    this.search = function(key) {};
    this.inOrderTraverse = function() {};
    this.preOrderTraverse = function() {};
    this.postOrderTraverse = function() {};
    this.min = function() {};
    this.max = function() {};
    this.remove = function(key) {};

}

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);