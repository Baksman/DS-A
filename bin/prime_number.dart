import 'dart:math' as math;

bool isPrimeNumber(int number) {
  for (int i = 2; i < math.sqrt(number); i++) {
    if ((number % i) == 0) {
      return false;
    }
  }

  return true;
}

// euler formula
int HCF(int number1, int number2) {
  if (number2 == 0) {
    return number1;
  }
  return HCF(number2, number1 % number2);
}

int reverseNumber(number) {
  int reverse = 0;

  while (number > 0) {
    int lastNumber = number % 10;
    reverse = reverse * 10 + lastNumber;
    number = number ~/ 10;
  }
  return reverse;
}

void main() {
  print(reverseNumber(12345));
}
