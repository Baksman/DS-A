values = [20, 30, 15, 25, 10]

weights = [6, 13, 5, 10, 3]


def knap(i, k):

    if i == len(values):
        return 0
    elif k < 0:
        return float('-inf')
    else:
        return max(values[i]+knap(values, weights, k-weights[i], i+1), knap(values, weights, k, i+1))
