// a data structure specilised ins storing data that can be represented as a collection
// can be used in google auto complete

class TrieNode<T> {
  TrieNode({this.key, this.parent});
  // 1
  T? key;

  // 2
  TrieNode<T>? parent;

  Map<T, TrieNode<T>?> children = {};

  bool isTerminating = false;
}

class StringTrie {
  //int beacuse string is a collection of utf-16
  TrieNode<int> root = TrieNode<int>(key: null, parent: null);

  void insert(String text) {
    // 1
    var current = root;

    // 2
    for (int codeUnit in text.codeUnits) {
      current.children[codeUnit] ??= TrieNode(key: codeUnit, parent: current);
      current = current.children[codeUnit]!;
    }

    // 3
    current.isTerminating = true;
  }

  bool contains(String text) {
    // 1
    var current = root;

    for (int codeUnit in text.codeUnits) {
      final child = current.children[codeUnit];
      if (child == null) {
        return false;
      }
      current = child;
    }
    return current.isTerminating;
  }

  void remove(String text) {
    // 1
    var current = root;
    for (final codeUnit in text.codeUnits) {
      final child = current.children[codeUnit];
      if (child == null) {
        return;
      }
      current = child;
    }
    // 2
    if (!current.isTerminating) {
      return;
    }
    // 3
    while (current.parent != null &&
        current.children.isEmpty &&
        !current.isTerminating) {
      current.parent!.children[current.key!] = null;
      current = current.parent!;
    }
  }
}

void main() {
  final trie = StringTrie();

  trie.insert("cute");

  if (trie.contains('cute')) {
    print("it contains cute");
  }
}
