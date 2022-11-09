void main() {
  final future1 = Future<int>.value(1);
  final future2 = Future.delayed(Duration(seconds: 1), () => 'Hello');
  final future3 = Future.error('bad');
  Future.wait([future1, future2, future3]);

  future3.then((value) {}, onError: (
    err,
    stack,
  ) {
    print(err);
  });
}
