List<List<int>> pascalTriangle(int numOfRows, {List<List<int>>? arrays}) {
  if (arrays == null) {
    print('arrays is null');
    arrays = [
      [1]
    ];
  }
  if (numOfRows < 2) {
    return arrays;
  }
  List<int> newArray = [1];

  final prevArray = arrays[arrays.length - 1];

  prevArray.asMap().forEach((key, value) {
    if (key == 0) return;

    newArray.add(prevArray[key] + prevArray[key - 1]);
  });

  newArray.add(1);

  arrays.add(newArray);

  return pascalTriangle(numOfRows - 1, arrays: arrays);
}

