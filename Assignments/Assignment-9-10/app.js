                                               //   ASSIGNMENT 7-8 NOT GIVEN

// // 1. Write a program to take “city” name as input from user. If
// // user enters “Karachi”, welcome the user like this:
// // “Welcome to city of lights”

// var city = prompt("Enter a city name:");                                                                                                                                    
// if (city === "Karachi" || city === "karachi")  
// {
//     alert("Welcome to the city of lights.");
// }
// else{
//     alert("You are not in Karachi :-(");
// }


// // 2. Write a program to take “gender” as input from user. If the
// // user is male, give the message: Good Morning Sir. If the
// // user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter your gender:");
// if (gender === "Male" || gender === "male") 
// {
//     alert("Good Morning Sir.");   
// }
// else if(gender ==="Female"|| gender ==="female")
// {
//     alert("Good Morning Ma’am.");
// }
// else{
//    alert("Please enter your gender!");
// }


// // 3. Write a program to take input color of road traffic signal
// // from the user & show the message according to this table:

// var signalColor = prompt("Enter color of road traffic signal:");
// if (signalColor === "Red" || signalColor === "red") {
//     alert("RED"+"="+" Must Stop");
// } else if (signalColor === "Yellow" || signalColor === "yellow") {
//     alert("YELLOW"+"="+"Ready to move");
// } else if (signalColor === "Green" || signalColor === "green") {
//     alert("GREEN"+"="+"Move now");
// } else {
//     alert("Please enter traffic signal color!");
// }


// // 4. Write a program to take input remaining fuel in car (in
// // litres) from user. If the current fuel is less than 0.25litres,
// // show the message “Please refill the fuel in your car”   

// var fuel = prompt("Enter remaing fuel in car (in litres)");
// if(fuel <= 0.25) {
//     alert("Please refill the fuel in your car");
//   }
// else{
//     alert("refill later!")
// }


// // 5. Run this script, & check whether alert message would be
// // displayed or not. Record the outputs.

//  var a = 4;
//  if (++a === 5){
//  alert("given condition for variable a is true");
//  }
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }


// // 6. Write a program to take input the marks obtained in three
// // subjects & total marks. Compute & show the resulting
// // percentage on your page. Take percentage & compute
// // grade as per following table:

// var sub1 = +prompt("Enter marks obtained in Computer ");
// var sub2 = +prompt("Enter marks obtained in Math");
// var sub3 = +prompt("Enter marks obtained in English");
// var totalMarks = +prompt("Enter total marks");

// var obtMarks = sub1 + sub2 + sub3;
// var per = (obtMarks / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1><br> Total Marks: "+totalMarks+"<br> Obtained Marks: "+obtMarks+"<br>Percentage: "+per+"%"+"<br>");
// if (per >= 80) {
//     document.write("Grade: A-one <br> Remarks: Excellent <br>");
// }
// else if (per >= 70) {
//     document.write("Grade: A <br> Remarks: Good <br>");
// }
// else if (per >= 60) {
//     document.write("Grade: B <br> Remarks: You need to improve <br>");
// }
// else {
//     document.write("Grade: Fail <br> Remarks: Sorry <br>");
// }


// // 7. Guess game:
// // Store a secret number (ranging from 1 to 10) in a variable.
// // Prompt user to guess the secret number.
// // a. If user guesses the same number, show “Bingo! Correct
// // answer”.
// // b. If the guessed number +1 is the secret number, show
// // “Close enough to the correct answer”.

// var secretNumber = 7;
// var user = prompt("Enter Any Number Between 1 to 10 :");
//  if (secretNumber ==  user)
//  {
//     alert("Bingo! Correct answer.");
//  }
//  else if ((secretNumber+1) == user)
//  {
//     alert("You Are Close enough To Secret Number! Try Again");
//  }
//  else if ((secretNumber-1) == user)
//  {
//     alert("You Are Close enough To Secret Number! Try Again");
//  }
// else{
//     alert("Your Number Is not Correct!");
// }

// // 8. Write a program to check whether the given number is
// // divisible by 3. Show the message to the user if the number
// // is divisible by 3.

// var num = +prompt("Enter a number: ");
// if (num % 3 == 0){
//     alert("The number is divisible by 3");
// }
// else{
//     alert("The number is not divisible by 3");
// }

// // 9. Write a program that checks whether the given input is an
// // even number or an odd number.


// var num = +prompt("Enter a number: ");
// if (num % 2 == 0){
//     alert("The number is even");
//  }
// else{
//     alert("The number is odd");
// }


// // 10. Write a program that takes temperature as input and
// // shows a message based on following criteria
// // a. T > 40 then “It is too hot outside.”
// // b. T > 30 then “The Weather today is Normal.”
// // c. T > 20 then “Today’s Weather is cool.”
// // d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temp = +prompt("Enter the atmosphere temperature: ");
// if (temp > 40){
//     alert("It is too hot outside.");
// }
// else if (temp > 30){
//     alert("The weather today is normal.");
// }
// else if (temp > 20){
//     alert("Today's weather is cool.");
// }
// else if (temp > 10){
//      alert("OMG! Today's weather is so cool.");
// }


// // 11. Write a program to create a calculator for +,-,*, / & %
// // using if statements. Take the following input:
// // a. First number
// // b. Second number
// // c. Operation (+, -, *, /, %)
// // Compute & show the calculated result to user.

// var firstNumber = +prompt("Enter the first number: ")
// var secondNumber= +prompt("Enter the second number: ")
// var operation = prompt("Enter the operation (+, -, *, /, %): ")

// if (operation == "+"){
//     res = firstNumber + secondNumber
//     alert("The result is: "+ res)
// }
// else if (operation == "-"){
//     res = firstNumber - secondNumber
//     alert("The result is: "+res)
// }
// else if (operation == "*"){
//     res = firstNumber * secondNumber
//     alert("The result is: "+res)
// }
// else if (operation == "/"){
//     res = firstNumber / secondNumber
//     alert("The result is: "+res)
// }
// else if (operation == "%"){
//     res = firstNumber % secondNumber
//     alert("The result is: "+res)
// }
// else{
//     alert("Unsuccessful operation.")
// }


                                                                  // // -- END --