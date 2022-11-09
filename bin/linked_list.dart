class Node<T> {
  Node({required this.value, this.next});

  T value;
  Node<T>? next;

  @override
  String toString() {
    if (next == null) return '$value';
    return '$value -> ${next.toString()}';
  }
}

class LinedList<E> extends Iterable<E> {
  Node<E>? head;
  Node<E>? tail;

  bool get isEmpty => head == null;

  // pop removes element from the head of the list
  E? pop() {
    final value = head?.value;
    head = head?.next;
    if (isEmpty) {
      tail = null;
    }
    return value;
  }

  E? removeLast() {
    // 1
    if (head?.next == null) return pop();

    // 2
    var current = head;
    while (current!.next != tail) {
      current = current.next;
    }

    // 3
    final value = tail?.value;
    tail = current;
    tail?.next = null;
    return value;
  }

  E? removeAfter(Node<E> node) {
    if (node.next == null) return null;
    final value = node.next?.value;
    if (node.next == tail) {
      tail = node;
    }
    node.next = node.next?.next;
    return value;
  }

// push adds element to front of list
  void push(E value) {
    head = Node(value: value, next: head);
    tail ??= head;
  }

  Node<E> insertAfter(Node<E> node, E value) {
    // 1
    if (tail == node) {
      append(value);
      return tail!;
    }
    // 2
    node.next = Node(value: value, next: node.next);
    return node.next!;
  }

  Node<E>? nodeAt(int index) {
    var currentNode = head;
    var currentIndex = 0;

    while (currentNode != null && currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex = currentIndex + 1;
    }
    return currentNode;
  }

  void append(E value) {
    // 1
    if (isEmpty) {
      push(value);
      return;
    }
    // 2
    tail!.next = Node(value: value);

    // 3
    tail = tail!.next;
  }

  @override
  String toString() {
    if (isEmpty) return 'Empty list';
    return head.toString();
  }

  @override
  Iterator<E> get iterator => _LinkedListIterator<E>(this);

}

void main() {
  // final node1 = Node(value: 1);
  // final node2 = Node(value: 2);
  // final node3 = Node(value: 3);
  // node1.next = node2;
  // node2.next = node3;

  // print(node1);
}

class _LinkedListIterator<E> implements Iterator<E> {
  _LinkedListIterator(LinedList<E> list) : _list = list;
  final LinedList<E> _list;
  Node<E>? _currentNode;

  @override
  E get current => _currentNode!.value;
  bool _firstPass = true;

  @override
  bool moveNext() {
    // 1
    if (_list.isEmpty) return false;

    if (_firstPass) {
      _currentNode = _list.head;
      _firstPass = false;
    } else {
      _currentNode = _currentNode?.next;
    }
    return _currentNode?.next != null;
  }
  
}
