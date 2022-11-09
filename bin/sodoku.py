

def is_valid(grid):

    rows = [set() for i in range(9)]
    cols = [set() for i in range(9)]
    squares = [set() for i in range(9)]

    for i in range(9):
        for j in range(9):
            if grid[i][j] == '.':
                continue
            elif grid[i][j] in rows[i].union(
                    cols[j].union(squares[(i//3)*3 + j // 3])):
                return False

            else:
                rows[i].add(grid[i][j])
                cols[j].add(grid[i][j])
                squares[(i//3)*3 + j // 3].add(grid[i][j])
