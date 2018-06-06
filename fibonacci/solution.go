package main

import (
	"fmt"
)

func fibonacci(n int) []int {
	f := make([]int, n+1, n+2)
	if n < 2 {
		f = f[0:2]
	}

	f[0] = 0
	f[1] = 1
	for i := 2; i <= n; i++ {
		f[i] = f[i-1] + f[i-2]
	}
	return f
}

func main() {
	fib := fibonacci(15)
	fmt.Printf("%v", fib)
	fmt.Println("")
}
