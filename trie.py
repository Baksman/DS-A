

class TrieNode:

    def __init__(self, key, parent):
        self.children = {}
        self.parent = None
        self.isTerminating = False


class Trie:
    root = TrieNode(None, None)
