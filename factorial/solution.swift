func factorial(number: Int) -> Int {
  if number == 0 {
    return 1
  }

  return number * factorial(number: number - 1)
}

print(factorial(number: 7)) // 5040
print(factorial(number: 5)) // 720
print(factorial(number: 0)) // 1
