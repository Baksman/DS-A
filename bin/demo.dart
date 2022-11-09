// void main() {
//   demo((name) {
//     print(name);
//     return name;
//   });
//   print(count);
// }

// int count = 0;
// void demo(String Function(String) stringer) {
//   if (count > 5) {
//     return;
//   }
//   stringer('hello');
//   count++;

//   demo(stringer);
// }

// class BaseClass {
//   fromJson() {}
// }

// class Bank<T extends BaseClass> {
//   init(int Function(int) d) {
//     return d();
//   }
// }
void main() {
  final dIterable = DummyIterable<int?>();
  dIterable.forEach(print);
  dIterable.map(print);
}

class DummyIterable<T> extends Iterable<T> {
  List<T> items;

  DummyIterable() : items = [];

  @override
  Iterator<T> get iterator => _DummyIterator<T>(this);
}

class _DummyIterator<T> extends Iterator<T> {
  DummyIterable dummyIterable;
  _DummyIterator(this.dummyIterable);
  int currentIndex = 0;
  T? currentValue;
  @override
  T get current =>
      dummyIterable.items.isEmpty ? null : dummyIterable.items[currentIndex];

  @override
  bool moveNext() {
    if (currentIndex <= (dummyIterable.items.length - 1)) {
      currentValue = dummyIterable.items[currentIndex];
      currentIndex++;
      return true;
    }
    return false;
  }
}
