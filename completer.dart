import 'dart:async';

Future<String> completerError() {
  final completer = new Completer<String>();
  completer.completeError('Error occured');
  return completer.future;
}

Future<int> completerCallback() {
  final completer = new Completer<int>();

  void highOrderFuntion(Function function) {
    return function();
  }

  highOrderFuntion(() {
    completer.complete(10);
  });

  return completer.future;
}
// completerDemo().then((value) => print(value));
// Future<String> getName() {
//   final name = Future.value('ibrahim');
//   name.then((value) => print(name));
// }

ff() async {
  return 2;
}

Future<int> futureFunction() async {
  return 2;
}

void main() {}

Future<bool> futureDemo() {
  return Future(() => true);
}

Future<num> futureWithValue() {
  final futureWithVal = Future.value(10000.0);
}

Future<String> futureWithDelay() {
  // Future.microtask(() => null)
  // Future.error()
  final future1 = Future<int>.value(1);
  final future2 = Future.delayed(Duration(seconds: 1), () => 'Hello');
  final future3 = Future.value(() => true);
  Future.wait([future1, future2, future3]);

  future3.then((value) {},
      onError: (
        err,
        stack,
      ) {
    print(err);
      });

  // Future.wait([])
  // FutureOr
}

Future futureTimeout() {
  final name = Future.delayed(
    Duration(seconds: 3),
    () => 'baksman',
  ).timeout(Duration(seconds: 2), onTimeout: () {
    print('timed out');
    return 'bb';
  });
  return name;
}
