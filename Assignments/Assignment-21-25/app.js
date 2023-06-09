// // 1. Write a program that takes two user inputs for first and 
// // last name using prompt and merge them in a new variable 
// // titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName+" "+lastName;
// document.write("Hello, "+fullName+"! Welcome!");


// // 2. Write a program to take a user input about his favorite 
// // mobile phone model. Find and display the length of user 
// // input in your browser

// var favoriteModel = prompt("Enter your favorite mobile phone model:");
// var length = favoriteModel.length;
// document.write("The length of your input is: "+length);


// // 3. Write a program to find the index of letter “n” in the word
// // “Pakistani” and display the result in your browser 

// var word = "Pakistani";
// document.write("String : 'Pakistani' "+"<br>")
// document.write("index of"+" 'n' "+" :"+word.indexOf("n"));


// // 4. Write a program to find the last index of letter “l” in the 
// // word “Hello World” and display the result in your browser.

// var word = "Hello World";
// document.write("String: "+word+"<br>")
// document.write("last index of "+" 'l': " + word.lastIndexOf("l"));


// // 5. Write a program to find the character at 3rd index in the 
// // word “Pakistani” and display the result in your browser.

// var word = "Pakistani";
// document.write("String : 'Pakistani' "+"<br>")
// document.write("index of"+" 'n' "+" :"+word.indexOf("n"));


// // 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);
// document.write("Hello, "+fullName+"! Welcome!");


// // 7. Write a program to replace the “Hyder” to “Islam” in the 
// // word “Hyderabad” and display the result in your browser

// var word = "Hyderabad";
// var modifiedWord = word.replace("Hyder", "Islam");
// document.write("Original word: "+word+"<br>");
// document.write("Modified word: "+modifiedWord);


// //8. Write a program to replace all occurrences of “and” in the
// // string with “&” and display the result in your browser.
// // var message = “Ali and Sami are best friends. They play cricket and 
// // football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// replace = message.replace(/and/g, "&");
// document.write("Original message: "+message+"<br>");
// document.write("New message: "+replace);


// // 9. Write a program that converts a string “472” to a number 
// // 472. Display the values & types in your browser

// var strNum = "472";
// var num = strNum;
// document.write("Original string: " + strNum + "<br>");
// document.write("Converted number: " + num + "<br>");
// document.write("Type of string: " + typeof strNum + "<br>");
// document.write("Type of number: " + typeof num);


// // 10. Write a program that takes user input. Convert and 
// // show the input in capital letters

// var userInput = prompt("Enter your input:");
// var capitalizedInput = userInput.toUpperCase();
// document.write("Original input: "+userInput+"<br>");
// document.write("Capitalized input: "+capitalizedInput);


// // 11. Write a program that takes user input. Convert and 
// // show the input in title case.

// var userInput = prompt("Enter user input");
// var input = userInput.slice(0,1).toUpperCase();
// var user= userInput.slice(1);
//  document.write("Original input: " + userInput + "<br>");
//  document.write("Title case input: "+input+user);


// // 12. Write a program that converts the variable num to 
// // string.
// // var num = 35.36 ;
// // Remove the dot to display “3536” display in your browser

// var num = 35.36;
// var string = num.toString();
// var result = string.replace(".", "");
// document.write("Original number: "+num+"<br>");
// document.write("Result string: "+newString);


// // 13. Write a program to take user input and store username 
// // in a variable. If the username contains any special symbol 
// // among [@ . , !], prompt the user to enter a valid username. 
// // For character codes of [@ .
// // Note:
// // ASCII code of ! is 33
// // ASCII code of , is 44
// // ASCII code of . is 46 
// // ASCII code of @ is 64

// var username = prompt("Enter your username:");
// if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
//   alert("Please enter a valid username without special symbols [@ . , !].");
// } else {
//   alert("Valid username: "+username);
// }


// // 14. You have an array
// // A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// // Write a program to enable “search by user input” in an 
// // array. After searching, prompt the user whether the given 
// // item is found in the list or not.
// // Note: Perform case insensitive search. Whether the user 
// // enters cookie, Cookie, COOKIE or coOkIE, program 
// // should inform about its availability. 

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search in the array:");
// var found = false;

// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput.toLowerCase()) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   alert("Item found in the list.");
// } else {
//   alert("Item not found in the list.");
// }
 

// // 15. Write a program to take password as an input from 
// // user. The password must qualify these requirements:
// // a. It should contain alphabets and numbers
// // b. It should not start with a number
// // c. It must at least 6 characters long
// // If the password does not meet above requirements,
// // prompt the user to enter a valid password.
// // For character codes of a-z, A-Z & 0-9, refer to ASCII
// // table at the end of this document.

// var password = prompt("Enter your password:");
// var alphaANDnum = /[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(password);
// var startNum = /^[^0-9]/.test(password);
// var charActer6 = password.length >= 6;
// if (alphaANDnum && startNum && charActer6) {
//   alert("Valid password!");
// } else {
//   alert("Please enter a valid password.");
// }


// // 16. Write a program to convert the following string to an 
// // array using string split method.
// // var university = “University of Karachi”;
// // Display the elements of array in your browser

// var university = "University of Karachi";
// for(var i=0; i<university.length; i++)
// {
//    document.write(university[i] + "<br>");
// }


// // 17. Write a program to display the last character of a user 
// // input.

// var userInput = prompt("Enter a input:");
// var lastCharacter = userInput[userInput.length - 1];
// alert("The last character of the user input is: " + lastCharacter);


// // 18. You have a string “The quick brown fox jumps over the 
// // lazy dog”. Write a program to count number of 
// // occurrences of word “the” in given string

// var string = "The quick brown fox jumps over the lazy dog";
// var count = 1;
// var words = string.split(" ");
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === "the") {
//     count++;
//   }
// }
// document.write("Text:"+string+"<br>")
// document.write("The word 'the' appears " + count + " times.");





                                                  // // -- END --