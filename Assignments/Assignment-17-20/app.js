// // 1. Declare and initialize an empty multidimensional array.
// // (Array of arrays)

//  multiArray = [[]];
//  multiARray = [[1, 2], [3, 4, 5], [6]];


// // 2. Declare and initialize a multidimensional array 
// // representing the following matrix:
// // 0 1 2 3
// // 1 0 1 2 
// // 2 1 0 1

// matrix = [
//    [0, 1, 2, 3],
//    [1, 0, 1, 2],
//    [2, 1, 0, 1]
//  ];


// // 3. Write a program to print numeric counting from 1 to 10.

// for (let i = 1; i <= 10; i++) {
//    document.write(i+"<br>");
// }


// // 4. Write a program to print multiplication table of any 
// // number using for loop. Table number & length should be 
// // taken as an input from user.

// tableNumber = +prompt("Enter the number of which you want a multiplication table:");
// tableLength = +prompt("Enter the length of the multiplication table:");
// document.write("Multiplication Table of "+tableNumber+"<br> <br>");
// for (i = 1; i <= tableLength; i++) {
//   result = tableNumber * i;
//   document.write(tableNumber+" x "+i+" = "+result+"<br>");
// }


// // 5. Write a program to print items of the following array 
// // using for loop:
// // fruits = [“apple”, “banana”, “mango”, “orange”, 
// // “strawberry”]

// fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (i = 0; i < fruits.length; i++) {
//    document.write (fruits[i]+"<br>");
// }


// // 6. Generate the following series in your browser. See 
// // example output.
// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write("Counting: <br> <br>");
// for (let i = 1; i <= 15; i++) {
//   document.write(i+", ");
// }

// document.write("<br> <br> Reverse counting: <br> <br>");
// for (let i = 10; i >= 1; i--) {
//   document.write(i+", ");
// }

// document.write("<br> <br> Even: <br> <br>");
// for (let i = 0; i <= 20; i += 2) {
//   document.write(i+", ");
// }

// document.write("<br> <br> Odd: <br> <br>");
// for (let i = 1; i <= 19; i += 2) {
//   document.write(i+", ");
// }

// document.write("<br> <br> Series: <br> <br>");
// for (let i = 1; i <= 10; i++) {
//   let result = i * 2;
//   document.write(result+"k, ");
// }


// // 7. You have an array
// // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// // Write a program to enable “search by user input” in an 
// // array.
// // After searching, prompt the user whether the given item is
// // found in the list or not. Example
// // cookie is available in index 2
// // sorry pastrie is not available

// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// userInput = prompt("Enter an item to search:");
// found = -1;
// for (i = 0; i < A.length; i++) {
//   if (A[i] === userInput) {
//     found = i;
//     break;
//   }
// }
// if (found !== -1) {
//   document.write(userInput+" is available in index "+found);
// } else {
//   document.write("Sorry, "+userInput +" is not available");
// }


// // 8. Write a program to identify the largest number in the 
// // given array.
// // A = [24, 53, 78, 91, 12].

// A = [24, 53, 78, 91, 12];
// largestNumber = A[0];
// for (i = 1; i < A.length; i++) {
//   if (A[i] > largestNumber) {
//     largestNumber = A[i];
//   }
// }
// document.write("The largest number in the array is: "+largestNumber);


// // 9. Write a program to identify the smallest number in the 
// // given array.
// // A = [24, 53, 78, 91, 12]


// A = [24, 53, 78, 91, 12];
// smallestNumber = A[0];
// for (i = 1; i < A.length; i++) {
//   if (A[i] < smallestNumber) {
//     smallestNumber = A[i];
//   }
// }
// document.write("The smallest number in the array is: "+smallestNumber);


// // 10. Write a program to print multiples of 5 ranging 1 to 
// // 100.
// // 5 , 10 , 15 , 20 , 25 , 30 , 35 , 40 , 45 , 50 , 55, 60, 65, 70, 75, 80, 95, 100

// for (i = 1; i <= 100; i++) {
//    if (i % 5 === 0) {
//      document.write(i+", ");
//    }
//  }
                                                   // // -- END --