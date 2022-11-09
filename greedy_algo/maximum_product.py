
[-5, -2, -1, 0, 2, 5]
# find the maximum product of first 3 elements


def maxp3(val):
    A = sorted(A)

    hi3 = A[-1] * A[-2] * A[-3]
    lo2hi1 = A[0] * A[1] * A[-1]

    return max(hi3, lo2hi1)
