def sigma_finder(limit):
    result = 0
    for i in range(1, limit):
        if i % 3 == 0 or i % 5 == 0:
            result = result + i
    return result

print(sigma_finder(10)) # 23
print(sigma_finder(50000000)) # 583,333,291,666,668
