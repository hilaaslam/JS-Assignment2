// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var a = 10;
// document.write ("Result:<br>The value of a is: "+a+"<br><br>")
// var a2 = ++a;
// var a21 = 11;
// document.write ("The value of ++a is: "+a2+"<br>Now the value of a is: "+a21+"<br><br>")
// var a3 = a++;
// var a31 = 12;
// document.write ("The value of a++ is: "+a3+"<br>Now the value of a is: "+a31+"<br><br>")
// var a4 = --a;
// var a41 = 11;
// document.write ("The value of --a is: "+a4+"<br>Now the value of a is: "+a41+"<br><br>")
// var a5 = a--;
// var a51 = 10;
// document.write ("The value of --a is: "+a5+"<br>Now the value of a is: "+a51+"<br><br>")


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write ("a is: "+a+"<br>b is : "+b+"<br>Result is : "+result);


// // 3. Write a program that takes input a name from user &
// // greet the user.

// var input = prompt("Enter your name:");
// document.write("Hello "+input+"! Welcome!");


// // 4. Q-4 is not given


// // 5. Write a program to take input a number from user &
// // display it’s multiplication table on your browser. If user
// // does not enter a new number, multiplication table of 5
// // should be displayed by default.

// var number = prompt("Enter a number:");

// if (!number) {
//    number = 5; 
//   document.write ("<h2> Table of "+number+".</h2>");

//   for(var i=1; i<=10; i++){
//   document.write("<li>"+number+"x"+i+"="+(number * i)+"</li>");}
// }
// else {
//    var anyNumber = number ;
//    document.write ("<h2> Table of "+number+".</h2>");

//    for(var i=1; i<=10; i++){
//       document.write("<li>"+number+"x"+i+"="+(number * i)+"</li>");}
// }


// // 6. Take
// // a) Take three subjects name from user and store them in 3
// // different variables.
// // b) Total marks for each subject is 100, store it in another
// // variable.
// // c) Take obtained marks for first subject from user and
// // stored it in different variable.
// // d) Take obtained marks for remaining 2 subjects from user
// // and store them in variables.
// // e) Now calculate total marks and percentage and show the
// // result in browser like this.(Hint: user table)

//  var subject1 = prompt("Enter name of Subject 1:");
//  var subject2 = prompt("Enter name of Subject 2:");
//  var subject3 = prompt("Enter name of Subject 3:");
//  var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
//  var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
//  var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));
//  var totalMarks = 100;
//  var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
//  var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
 
//  document.write("<table>");
//  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
//  document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
//  document.write("<h2>Subject Marks</h2>");
//  document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
//  document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
//  document.write("</table>");
//  document.write("<h2>Result</h2>");
//  document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
//  document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
        
        
  // // 7. Q-7 is not given
    

                                                                  // // -- END --

