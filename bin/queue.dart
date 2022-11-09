abstract class Queue<E> {
  bool enqueue(E element);
  E? dequue();
  bool get isEmpty;
  E? get peek;
}

class QueueList<E> implements Queue<E> {
  final _list = <E>[];

  @override
  bool enqueue(E element) {
    _list.add(element);
    return true;
  }

  @override
  // TODO: implement isEmpty
  bool get isEmpty => _list.isEmpty;

  @override
  // TODO: implement peek
  E? get peek => (_list.isEmpty) ? null : _list.first;

  @override
  E? dequue() => (isEmpty) ? null : _list.removeAt(0);
}
