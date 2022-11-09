extension BinarySearch<E extends Comparable> on List<E> {
  E? binarySearch(E value, int? start, int? end) {
    this.sort();
    final startIndex = start ?? 0;
    final endIndex = end ?? 0;

    if (startIndex >= endIndex) {
      return null;
    }
    int space = endIndex - startIndex;

    var mid = endIndex + space ~/ 2;
    if (this[mid] == value) {
      return this[mid];
    } else if (value.compareTo(this[mid]) > 0) {
      return binarySearch(value, mid + 1, endIndex);
    } else {
      return binarySearch(value, startIndex, mid);
    }
  }
}

extension BinarySearchLoop<E extends Comparable> on List<E> {
  E? binarySearch(E value, int? start, int? end) {
    this.sort();
    final startIndex = start ?? 0;
    final endIndex = end ?? 0;

    if (startIndex >= endIndex) {
      return null;
    }
    // while (startIndex < endIndex) {
    //   if()
    // }
    return null;
  }
}
