abstract class Queue<E> {
  bool enqueue(E element);
  E? dequeue();
  bool get isEmpty;
  E? get peek;
}

class PriorityQueue<E extends Comparable<dynamic>> implements Queue<E> {

  PriorityQueue({List<E> elements,Priority priority})
  @override
  E? dequeue() {
    return true;
  }

  @override
  bool enqueue(E element) {
    return true;
  }

  @override
  bool get isEmpty => true;

  @override
  // TODO: implement peek
  E? get peek => true;
}
