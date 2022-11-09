class TreeNode:
    def __init__(self, value):
        self.value = value
        self.l = None
        self.r = None
        self.h = 1


class AVLTree(object):

    def insert(self, root, key):
        if not root:
            return treeNode(key)
        elif key < root.value:
            root.r = self.insert(root.l, key)
        else:
            root.r = self.insert(root.r, key)
        root.h = 1 + max(self.getHeight(root.l), self.getHeight(root.r))

        b = self.getBal(root.l)
        if b > 1 and key < root.l.value:
            return self.rRotate(root)
        if b < -1 and key > root.l.value:
            root.l = self.lRotate(root)
        if b > 1 and key < root.l.value:
            root.l = self.lRotate(root.l)
            return self.rRotate(root)
        if b < - 1 and key < root.r.value:
            root.r = self.rRotate(root.r)
            return self.lRotate(root)
        return root
    
def lRotate(self, z):
    y = z.r
    T2 = y.l
    
    y.l = z

