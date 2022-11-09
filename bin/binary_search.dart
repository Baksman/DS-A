extension SortedList<E extends Comparable<dynamic>> on List<E> {
  int? binarySearch(E value, [int? start, int? end]) {
    final startIndex = start ?? 0;
    final endIndex = end ?? length - 1;

    if (startIndex >= endIndex) {
      return null;
    }

    final size = endIndex - startIndex;
    final middle = startIndex + size ~/ 2;

    // 4
    if (this[middle] == value) {
      return middle;
    }
    // 5
    else if (value.compareTo(this[middle]) < 0) {
      return binarySearch(value, startIndex, middle);
    } else {
      return binarySearch(value, middle + 1, endIndex);
    }
  }
}

void main() {
  List<int> values = [1, 30, 404, 2, 59, 4, 9, 4];
  values..sort();
  print(values.binarySearch(
    9,
  ));
}
