// Oh boy, this is probably going to be some ugly code today!
// I've been reading a lot about golang but haven't actually written much.
// Here we go!

package main

import (
	"fmt"
	s "strings"
)

func isAnagram(target string) bool {
	reversed := make([]string, 0)
	for i := len(target) - 1; i >= 0; i-- {
		reversed = append(reversed, string(target[i]))
	}
	return s.Join(reversed, "") == target
}

func removeCharFromStr(str string, char string) string {
	return s.ReplaceAll(str, char, "")
}

func reduceArr(targetArr []int) int {
	sum := 0
	for _, element := range targetArr {
		sum += element
	}
	return sum
}

func fizzbuzz() []int {
	var fizzbuzzes []int
	for i := 1; i <= 100; i++ {
		if i%3 == 0 && i%5 == 0 {
			fizzbuzzes = append(fizzbuzzes, i)
		}
	}
	return fizzbuzzes
}

func main() {
	fmt.Println("Hello World")                                   // Hello World
	fmt.Println(fizzbuzz())                                      // [15, 30, 45, 60, 75, 90]
	fmt.Println(isAnagram("hello"))                              // false
	fmt.Println(isAnagram("tacocat"))                            // true
	fmt.Println(removeCharFromStr("hello", "h"))                 // ello
	fmt.Println(removeCharFromStr("hello", "l"))                 // heo
	fmt.Println(reduceArr([]int{1, 2, 3}))                       // 6
	fmt.Println(reduceArr([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10})) // 55
}
