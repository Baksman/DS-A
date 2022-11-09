// unbalanced tree can deteriorate performance of a tree
// perfecly balanced,balanced,unbalanced
// Rotation is the act of balancing a tree
// Balance factor is the diff btw hight of left and right subtree
// insertion on left on left is inbalance
// LR insertion is inbalance
import 'dart:math' as math;

AvlNode<E> leftRotate(AvlNode<E> node) {
  // 1
  final pivot = node.rightChild!;
  // 2
  node.rightChild = pivot.leftChild;
  // 3
  pivot.leftChild = node;
  // 4
  node.height = 1 + math.max(node.leftHeight, node.rightHeight);
  pivot.height = 1 + math.max(pivot.leftHeight, pivot.rightHeight);
  return pivot;
}
