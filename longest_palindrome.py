

def longest_palindrome(str):
    occurences = [0] * 128

    for letter in str:
        occurences[ord(letter)] += 1

    length = 0

    for occu in occurences:
        length += occu if occu % 2 == 0 else occu - 1

    if length < len(str):
        length + 1

    return length


