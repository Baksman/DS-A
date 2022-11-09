int fibonnaci(int value) {
  if (value <= 1) {
    return 1;
  }
  return fibonnaci(value - 1) + fibonnaci(value - 2);
}

void main() {
  print(fibonnaci(5));
}
