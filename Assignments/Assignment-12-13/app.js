                                               //   ASSIGNMENT 711 NOT GIVEN

// // 1. Write a program that takes a character (number or string) 
// // in a variable & checks whether the given input is a 
// // number, uppercase letter or lower case letter. (Hint: ASCII 
// // codes:- A=65, Z=90, a=97, z=122).

// var character = prompt("check a character");
// var input = character.charCodeAt(0);

// if (input >= 48 && input <= 65 ) {
//     alert (character+" is a number");
// }
// else if (input  >= 65 && input <= 90){
//     alert (character+" is an uppercase letter");
// }
// else if (input >= 97  && input <= 122){
//     alert (character+" is a lowercase letter");
// }
// else{
//     alert ("It is not a number or letter");
// }


// // 2. Write a JavaScript program that accept two integers and
// // display the larger. Also show if the two integers are equal.

// var num1 = +prompt("Enter the first integer: ");
// var num2 = +prompt("Enter the second integer: ");
// if (num1 > num2) {
//     alert ("The larger number is: "+num1);
// }
//  else if (num2 > num1) {
//     dalert ("The larger number is: "+num2);
//  }
// else {
//     alert ("Both integers are equal!");
// }


// //3. Write a program that takes input a number from user & 
// // tate whether the number is positive, negative or zero.

// var num = +prompt("Enter a number :");
// if (num > 0) {
//     alert ("The number is positive.");
// }
// else if (0 > num){
//     alert("The number is negative.");
// }
// else{
//     alert ("The number is zero!");
// }


// // 4.Write a program that takes a character (i.e. string of
// // length 1) and returns true if it is a vowel, false otherwise

//  var charActer = prompt('Enter a character: ')
// if (charActer === "a" ||
//     charActer === "e" ||
//     charActer === "i" || 
//     charActer === "o" || 
//     charActer === "u" || 
//     charActer === "A" || 
//     charActer === "E" || 
//     charActer === "I" || 
//     charActer === "O" || 
//     charActer === "U") {
//     alert ("True");
//   } else {
//     alert ("False");
//   }


// // 5. Write a program that
// // a. Store correct password in a JS variable.
// // b. Asks user to enter his/her password
// // c. Validate the two passwords:
// // i. Check if user has entered password. If not, then
// // give message “ Please enter your password”
// // ii. Check if both passwords are same. If they are
// // same, show message “Correct! The password you
// // entered matches the original password”. Show
// // “Incorrect password” otherwise

// var myPassword = "btv930"; 
// var askPassword = prompt("Enter your password: ");

//  if (!askPassword) {
//    alert("Please enter your password");
// } 
//  else if (askPassword === myPassword) {
//   alert("Correct! The password you entered matches the original password");
// } else {
//   alert("Incorrect password");
// }


// // 6. This if/else statement does not work. Try to fix it:
// // var greeting;
// // var hour = 13;
// // if (hour < 18) {
// // greeting = "Good day";
// // else
// // greeting = "Good evening";
// // }

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } 
// else {
//   greeting = "Good evening";
// }


// // 7. Write a program that takes time as input from user in 24
// // hours clock format like: 1900 = 7pm. Implement the
// // following case using if, else & else if statements

// var clockTime = prompt('Enter the time in 24 hours clock format (1900 = 7pm): ');
// if (clockTime >= 0 && clockTime < 1200) {
//   alert("Good Morning!");
// } 
// else if (clockTime >= 1200 && clockTime < 1700) {
//     alert("Good Afternoon!")
// }
//   else if (clockTime >= 1700 && clockTime < 2000) {
//     alert("Good Evening!");
// }
// else if (clockTime >= 2000 && clockTime < 2359){
//     alert("Good Night");
// }
// else {
//   alert("Enter time according to 24 hours clock format");
// }


                                                    // // -- END --