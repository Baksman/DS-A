//  binary tree has at most 2 children often refered to left and right children
void main() {
  final binaryTree = createBinaryTree();

  // print(binaryTree.toString());
  binaryTree.traversePreOrder(print);
}

class BinaryNode<T> {
  BinaryNode(this.value);

  T value;
  BinaryNode<T>? leftChild;
  BinaryNode<T>? rightChild;

  @override
  String toString() {
    return _diagram(this);
  }

  String _diagram(BinaryNode<T>? node,
      [String top = '', String root = '', String bottom = '']) {
    if (node == null) {
      return '$root null \n';
    }
    if (node.leftChild == null && node.rightChild == null) {
      return '$root ${node.value}\n';
    }
    final a = _diagram(node.rightChild, '$top ', '$top   ___', '$top|  ');
    final b = '$root ${node.value}\n';
    final c = _diagram(node.leftChild, '$bottom| ', '$bottom |___', '$bottom ');
    return '$a$b$c';
  }

  void traversePreOrder(void Function(T value) action) {
    action(value);
    leftChild?.traversePreOrder(action);
    rightChild?.traversePreOrder(action);
  }
}

BinaryNode<int> createBinaryTree() {
  final zero = BinaryNode(0);
  final one = BinaryNode(1);
  final two = BinaryNode(2);
  final three = BinaryNode(3);
  final four = BinaryNode(4);
  final five = BinaryNode(5);
  final six = BinaryNode(6);
  final seven = BinaryNode(7);
  final eight = BinaryNode(8);
  final nine = BinaryNode(9);

  seven.leftChild = one;
  one.leftChild = zero;
  one.rightChild = five;
  seven.rightChild = nine;
  nine.leftChild = eight;
  return seven;
}
