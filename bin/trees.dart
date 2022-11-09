// every node has one child
// root node has no parent
// leaf node has no child
typedef VoidPerformaction<T> = void Function(TreeNode<T> node);

class TreeNode<T> {
  TreeNode(this.value);
  T value;
  List<TreeNode<T>> children = [];

  void add(TreeNode<T> child) {
    children.add(child);
  }

  void forEachDepthFirst(VoidPerformaction performAction) {
    performAction(this);
    for (final child in children) {
      child.forEachDepthFirst(performAction);
    }
  }
}

void main() {
  TreeNode<String> makeBeverageTree() {
    final tree = TreeNode<String>('beverages');
    final cold = TreeNode<String>('cold');
    final hot = TreeNode<String>('hot');
    final tea = TreeNode('tea');
    final coffee = TreeNode('coffee');
    final chocolate = TreeNode('cocoa');
    final blackTea = TreeNode('black');
    final greenTea = TreeNode('green');
    final chaiTea = TreeNode('chai');
    final soda = TreeNode('soda');
    final milk = TreeNode('milk');
    final gingerAle = TreeNode('ginger ale');
    final bitterLemon = TreeNode('bitter lemon');

    tree.add(hot);
    tree.add(cold);
    hot.add(tea);
    hot.add(coffee);
    hot.add(chocolate);
    cold.add(soda);
    cold.add(milk);
    tea.add(blackTea);
    tea.add(greenTea);
    tea.add(chaiTea);
    soda.add(gingerAle);
    soda.add(bitterLemon);

    return tree;
    // tree.add('cold');
  }

  final tree = makeBeverageTree();

  tree.forEachDepthFirst((node) {
    print(node.value);
  });
}


