// // 1. Write a program that takes a positive integer from user &
// // display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number

// var program = prompt("Enter a positive integer:");
// var number = program;
// var roundValue = Math.round(number);
// var floorValue = Math.floor(number);
// var ceilValue = Math.ceil(number);

// document.write("Number: "+number+"<br>");
// document.write("Round off value: "+roundValue+"<br>");
// document.write("Floor value: "+floorValue+"<br>");
// document.write("Ceil value: "+ceilValue+"<br>");


// // 2. Write a program that takes a negative floating point
// // number from user & display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number

// var num = prompt("Enter a negative floating number:");
// document.write("<h3>Number:</h3>" + num);
// document.write("<h3>Round off value:</h3>" + Math.round(-num));
// document.write("<h3>Floor value:</h3>" + Math.floor(-num));
// document.write("<h3>Ceil value:</h3>" + Math.ceil(-num));

// var program = prompt("Enter a negative floating-point number:");
// var number = program;
// var roundValue = Math.round(number);
// var floorValue = Math.floor(number);
// var ceilValue = Math.ceil(number);

// document.write("Number: " + number + "<br>");
// document.write("Round off value: " + roundValue + "<br>");
// document.write("Floor value: " + floorValue + "<br>");
// document.write("Ceil value: " + ceilValue + "<br>");


// // 3. Write a program that displays the absolute value of a 
// // number.
// // E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num = prompt("Enter a number:");
// var absoluteValue = Math.abs(num);
// document.write("The absolute value of "+num+" is "+absoluteValue);


// // 4. Write a program that simulates a dice using random() 
// // method of JS Math class. Display the value of dice in your 
// // browser.

// var value = 4;
// document.write("Random dice value: "+value+"<br>")
// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("The dice value is: "+diceValue);


// // 5. Write a program that simulates a coin toss using random()
// // method of JS Math class. Display the value of coin in your
// // browser

// var coinToss = Math.floor(Math.random() * 3);
// if (coinToss === 2) {
//   document.write(coinToss+" Random coin value: Heads");
//   } 
// else if (coinToss === 1){
//   document.write(coinToss+" Random coin value: Tails");
// }


// // 6. Write a program that shows a random number between 1 
// // and 100 in your browser.

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100 "+randomNumber);


// // 7. Write a program that asks the user about his weight. Parse 
// // the user input and display his weight in your browser. 
// // Possible user inputs can be:
// // a. 50
// // b. 50kgs
// // c. 50.2kgs
// // d. 50.2kilograms

// var user = prompt("Enter your weight:");
// document.write("Your weight is: "+user+" kilograms");


// // 8. Write a program that stores a random secret number from 
// // 1 to 10 in a variable. Ask the user to input a number 
// // between 1 and 10. If the user input equals the secret 
// // number, congratulate the user

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userInput = prompt("Guess the secret number (between 1 and 10):");
// var userNumber = parseInt(userInput);
// if (userInput === secretNumber) {
//   alert("Congratulations! You guessed the secret number.");
// } else {
//   alert("Sorry, the secret number was " + secretNumber + ". Try again!");
// }



                                                  // // -- END --