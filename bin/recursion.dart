int recursiveFunc(int value) {
  if (value <= 0) {
    return value;
  }

  return value + recursiveFunc(value - 1);
}

extension ListUtils<E> on List<E> {
  List<E>? recursiveMap(VoidCallback function, {int? currentIndex}) {
    int? listlength = currentIndex ?? length - 1;

    if (listlength < 0) return null;

    function(this[listlength]);
    listlength--;
    return recursiveMap(function, currentIndex: listlength);
  }
} 

typedef VoidCallback<E> = void Function(E);
void main() {
  final items = [1, 3, 4, 5, 5, 6];
  items.recursiveMap((p0) {
    print(p0);
  });

  // print(recursiveFunc(5));
}
