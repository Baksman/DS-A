// list offers constant time insertion and deletion in dart.
class Stack<E> {
  Stack() : _storage = <E>[];
  final List<E> _storage;

  @override
  toString() {
    return "-----Top------\n"
        '${_storage.reversed.join('\n')}'
        '\n----------';
  }

  void push(E e) {
    _storage.add(e);
  }

  E pop() {
    return _storage.removeLast();
  }

  // non essential operation on Stack but good to have
  E get peek => _storage.last;

  bool isEmpty() => _storage.isEmpty;

  bool isNotEmpty() => _storage.isNotEmpty;

  Stack.of(Iterable<E> iterable) : _storage = List<E>.from(iterable);
}

void main(List<String> arguments) {
  // final stack = Stack<int>();
  // stack.push(1);
  // stack.push(100);
  // stack.push(1000);
  // print(stack.toString());
  // stack.pop();
  // print(stack.toString());
  // // testing stack from iterable
  // final mockData = ["hello", "from", "the", "other", "side"];
  // print(Stack.of(mockData).toString());

  print(balanceParenthesis('hello()'));
}

// create a stack;
void reveseList() {}

bool balanceParenthesis(String test) {
  Stack word = Stack<int>();
  final open = '('.codeUnitAt(0);
  final close = ')'.codeUnitAt(0);
  if (test.isEmpty) return false;
  for (int item in test.codeUnits) {
    if (item == open) {
      word.push(item);
    } else if (item == close) {
      if (word.isEmpty()) return false;
      word.pop();
    }
  }
  return word.isEmpty();
  // if (word.isEmpty()) {
  //   return false;
  // } else {
  //   if( word.pop == '')
}
