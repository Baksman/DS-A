void main() {
  final arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  int start = 0;
  int end = arr.length;
  print(binarySearch(arr, start, end-1, 11));
}

bool binarySearch(arr, start, end, target) {
  if (start > end ) return false;
  int midIndex = arr.length ~/ 2;
  if (arr[midIndex] == target) return true;
  if (arr[midIndex] < target)
    return binarySearch(arr, midIndex + 1, end, target);
  if (arr[midIndex] > target) return binarySearch(arr, 0, midIndex - 1, target);
  return false;
}


