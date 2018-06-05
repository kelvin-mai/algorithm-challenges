package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println(strings.Replace("Mr John Smith    ", " ", "%20", -1))
}
