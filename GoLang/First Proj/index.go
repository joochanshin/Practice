package main

import "fmt"

func main(){

	// fmt.Println("Hello World")

	// //Different variables

	// var age int = 40

	// var favNum float64 = 1.6180339

	// //randNum := 1

	// fmt.Println(age, favNum)

	// fmt.Println("6 + 4 =", 6 + 4)
	// fmt.Println("6 - 4 =", 6 - 4)
	// fmt.Println("6 * 4 =", 6 * 4)
	// fmt.Println("6 / 4 =", 6 / 4)
	// fmt.Println("6 & 4 =", 6 % 4)

	// const pi float64 = 3.1415926535

	// var (
	// 	varA = 2
	// 	varB = 3
	// )

	//var myName string = "JooChan Shin"

	//fmt.Println(len(myName))
	//var isOver40 bool = true

	// fmt.Printf("%f \n", pi) //	Returns float %.3f returns first three decimal places
	// fmt.Printf("%T \n", pi) //	Returns type 
	/*
	%d = decimal format
	%b = binary format
	%c = character format
	%x = hexadecimal format
	%e = scientific notation
	*/

	// For Loops

	// i := 1
	// for i <= 10{
	// 	fmt.Println(i)
	// 	i++
	// }
	// for j := 0; j < 5; j++{
	// 	fmt.Println(j)
	// }

	//	If Statements

	// yourAge := 18

	// if yourAge >= 16{
	// 	fmt.Println("You Can Drive")
	// } else {
	// 	fmt.Println("You can have fun")
	// }

	//	Switch Case

	// yourAge := 5

	// switch yourAge {
	// 	case 16 : fmt.Println("Go Drive")
	// 	case 18 : fmt.Println("Go Vote")
	// 	default : fmt.Println("Go Have Fun")
	// }

	//	Arrays

	// var favNums2[5] float64

	// favNums2[0] = 163
	// favNums2[1] = 2345

	favNums3 := [5]float64 {1, 2, 3, 4, 5}

	for i, value := range favNums3{
		fmt.Println(value, i)
	}

	for _, value := range favNums3{
		fmt.Println(value)
	}
}