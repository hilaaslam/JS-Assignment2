// // 1. Write a function that displays current date & time in your 
// // browser

// function dateTime()
//  {
//     document.write(new Date());
// }
// dateTime();


// // Write a function that takes first & last name and then it
// // greets the user using his full name.

//   function greeting(first,last)
//   {
//        document.write(first.concat(" ",last));
//   }
//   greeting("Hila","Aslam");
  

// // 3. Write a function that adds two numbers (input by user) 
// // and returns the sum of two numbers.

// function add2Numbers() {
//     var num1 = +prompt("Enter the first number:");
//     var num2 = +prompt("Enter the second number:");
//     var sum = num1 + num2;
//     return sum;
//   }
//   var ans = add2Numbers();
// document.write(ans);


// // 4. Calculator:
// // Write a function that takes three arguments num1, num2 
// // & operator & compute the desired operation. Return and 
// // show the desired result in your browser

// var num1 = +prompt("Enter  first number:")
// var num2 = +prompt("Enter  second number:")
// var operator = prompt("Enter operator '+,-,*,/':")
//  function calculator(num1, num2, operator) {
//     var result;
//     if (operator === "+") {
//       result = num1 + num2;
//     } 
//     else if (operator === "-") {
//       result = num1 - num2;
//     }
//     else if (operator === "*") {
//       result = num1 * num2;
// }
//      else if (operator === "/") {
//       result = num1 / num2;
//     }
//     return result;
//   }
//   var result = calculator(num1, num2, operator);
//       document.write(result);


// // 5. Write a function that squares its argument.

// function square(x) {
//     return x * x;
//   }
//   document.write(square(2)); 
//   document.write(square(4));


// // 6. Write a function that computes factorial of a number.

//   var integer = +prompt("Enter a integer:");
// function factorial(integer) {
//     if (integer === 0) {
//       return 1;
//     } 
//     else {
//       return integer * factorial(integer - 1);
//     }
//   }
//   document.write(factorial(integer));


// // 7. Write a function that take start and end number as inputs 
// // & display counting in your browser.
  
// var start = +prompt("Enter a start number:");
// var end = +prompt("Enter a end number:");
// function count(start , end) {
//     let result = '';
//     for (var i = start; i <= end; i++) {
//       result += i + ' ';
//     }
//     document.write(result);
//   }
//   count(start, end)

// // 8. Write a nested function that computes hypotenuse of a 
// // right angle triangle. 
// // Hypotenuse2 = Base2 + Perpendicular2
// // Take base and perpendicular as inputs.
// // Outer function : calculateHypotenuse()
// // Inner function: calculateSquare()

// function calculateHypotenuse() {
//     function calculateSquare(x) {
//       return x * x;
//     }
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = Math.sqrt(hypotenuseSquare); 
//     return hypotenuse;
//   }
//   var base = +prompt("Enter a base:");
//   var perpendicular = +prompt("Enter a perpendicular:");
//   var hypotenuse = calculateHypotenuse(base, perpendicular);
//   document.write("The hypotenuse of a right triangle with base "+base+" and perpendicular "+perpendicular+" is "+hypotenuse);


// // 9. Write a function that calculates the area of a rectangle.
// // A = width * height
// // Pass width and height in following manner:
// // i. Arguments as value
// // ii. Arguments as variables

// function calculateArea(width, height) {
//   var area = width * height;
//   document.write("The area of a rectangle with width 40 and height 90 is "+area+"<br>");

// }
// var width2 = +prompt("Enter a width:");
// var height2 = +prompt("Enter a height:");
// var ar2 = width2 * height2;
// document.write("The area of a rectangle with width "+width2+"and "+height2+"is "+ar2);



// // 10. Write a JavaScript function that checks whether a passed 
// // string is palindrome or not?
// // A palindrome is word, phrase, or sequence that reads the same backward as 
// // forward, e.g., madam.

// function palindrome(string)
// {    var reverse = string.split('').reverse().join('');
//       console.log(reverse);
//     if(string==reverse)
//         document.write("Its a palindrome")
//     else
//     document.write("Its not a palindrome")
// }
// var string = prompt("Enter String:");
// palindrome(string);


// // 11. Write a JavaScript function that accepts a string as a 
// // parameter and converts the first letter of each word of the 
// // string in upper case. 
// // EXAMPLE STRING : 'the quick brown fox'
// // EXPECTED OUTPUT : 'The Quick Brown Fox'

// function upperCase(string)
// {
//     document.write("User Input = "+string+"<br>");
//     var firstLetter=string.slice(0,1).toUpperCase();
//     var string = string.slice(1);
//     console.log();
//     document.write("Title Case = "+firstLetter+string+"<br>");
// }
// var string = prompt("Enter String:");
// upperCase(string);

// // 12. Write a JavaScript function that accepts a string as a 
// // parameter and find the longest word within the string. 
// // EXAMPLE STRING : 'Web Development Tutorial'
// // EXPECTED OUTPUT : 'Development

// function longestLength(string)
// {  
//   var sentence = string.split(" ");
//   var word = '';
//   for (var i = 0; i < sentence.length; i++) 
//   {
//     if (sentence[i].length > word.length) 
//     {
//       word = sentence[i];
//     }
//   }
//   return word; 
// }
// var string = prompt("Enter String:");
// document.write(" find Longest in Web Development Tutorial is = "+longestLength(string));


// // 13. Write a JavaScript function that accepts two arguments, a 
// // string and a letter and the function will count the number of 
// // occurrences of the specified letter within the string. 
// // Sample arguments : 'JSResourceS.com', 'o'

// function occurrences(string,letter)
// {
// var count = 0;
// var sentence = string.split("");
// for(var i=0; i<sentence.length; i++)
// {
// if(sentence[i] == letter){
//  count++;
// }
// }
// cdocument.write(count);
// return count;
// }
// var string = prompt("Enter String:");
// var letter = prompt("Enter letter to find its occurrence");
// document.write("Text: "+string+"<br>");
// document.write("<br>There are "+occurrences(string,letter)+" occurence of the Letter "+letter);



// // 14. The Geometrizer
// // Create 2 functions that calculate properties of a circle, using 
// // the definitions here.
// // Create a function called calcCircumference:
// // • Pass the radius to the function.
// // • Calculate the circumference based on the radius, and output 
// // "The circumference is NN".
// // Create a function called calcArea:
// // • Pass the radius to the function.
// // • Calculate the area based on the radius, and output "The area 
// // is NN".
// // Circumference of circle = 2πr
// // Area of circle = πr2

// function calcCircumference(radius){
//     var Circumference = 2*Math.PI*radius;
//     document.write("The circumference is "+Circumference.toFixed(2));
// }
// function calcArea(radius){
//     var area = 2*radius*radius;
//     document.write("<br>The area is "+area);   
// }
// var radius=prompt("enter the radius: ");
// calcCircumference(radius);
// calcArea(radius);ite("area of circle "+calcArea(5)+"<br>"); 



                                                                  // // -- END --