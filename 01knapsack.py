


def knapsaack(values, weights, k, i=0):
    if i == len(values):
        return 0
    elif k < 0:
        return float('-inf')
    else:
        return max(values[i]+knapsaack(values, weights, k-weights[i], i+1), knapsaack(values, weights, k, i+1))
