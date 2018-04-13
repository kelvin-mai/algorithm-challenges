test_case = [[1,  2,  3,  4,  5],
[6,  7,  8,  9,  10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20]]

def matrix_rotation(spiral):
    rows, cols = len(spiral), len(spiral[0])
    r, c = 0, -1
    nextturn = stepsx = cols
    stepsy = rows-1
    inc_c, inc_r = 1, 0
    turns = 0
    for i in range(rows*cols):
        c += inc_c
        r += inc_r 

        print(spiral[r][c], end=' ')

        if i == nextturn-1:
            turns += 1
            if turns%2==0:
                nextturn += stepsx
                stepsy -= 1
            else:
                nextturn += stepsy
                stepsx -= 1
            inc_c, inc_r = -inc_r, inc_c  
    
    print('\n')

matrix_rotation(test_case)