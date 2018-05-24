package main

import "fmt"

func main() {
	for i := 1; i <= 100; i++ {
		if i%3 == 0 || i%5 == 0 {
			if i%3 == 0 {
				fmt.Print("Fizz")
			}
			if i%5 == 0 {
				fmt.Print("Buzz")
			}
		} else {
			fmt.Print(i)
		}

		fmt.Printf("\n")
	}
}
