// // 1. Write a program that take two numbers & add them in a
// // new variable. Show the result in your browser.

// var num1 = "3";
// var num2 = "5";
// var sum = (Number(num1)+Number(num2))
// document.write ("<br><br> Sum of "+num1+" and "+num2+" is "+sum);


// // 2. Repeat task1 for subtraction, multiplication, division &
// // modulus.

// SUBTRACTION:

// var num1 = "3";
// var num2 = "5";
// var subt = (Number(num1)-Number(num2))
// document.write ("<br><br> Subtraction of "+num1+" and "+num2+" is "+subt);

// MULTIPLICATION:

// var num1 = "3";
// var num2 = "5";
// var mult = (Number(num1)*Number(num2))
// document.write ("<br><br> Multiplication of "+num1+" and "+num2+" is "+mult);

// DIVISION:

// var num1 = "3";
// var num2 = "5";
// var divi = (Number(num1)/Number(num2))
// document.write ("<br><br> Division of "+num1+" and "+num2+" is "+divi);

// MODULUS:

// var num1 = "3";
// var num2 = "5";
// var modu = (Number(num1)%Number(num2))
// document.write ("<br><br> Modulus of "+num1+" and "+num2+" is "+modu);


// // 3. Do the following using JS Mathematic Expressions
// // a. Declare a variable.
// // b. Show the value of variable in your browser like “Value
// // after variable declaration is: ??”.
// // c. Initialize the variable with some number.
// // d. Show the value of variable in your browser like “Initial
// // value: 5”.
// // e. Increment the variable.
// // f. Show the value of variable in your browser like “Value
// // after increment is: 6”.
// // g. Add 7 to the variable.
// // h. Show the value of variable in your browser like “Value
// // after addition is: 13”.
// // i. Decrement the variable.
// // j. Show the value of variable in your browser like “Value
// // after decrement is: 12”.
// // k. Show the remainder after dividing the variable’s value
// // by 3.
// // l. Output : “The remainder is : 0”

// a: var num ;
// b: document.write ("Value after variable declaration is "+num+".<br>");
// c: var num = "5";
// d: document.write ("Initial value:" +num+".<br>");
// e: num++ ;
// f: document.write ("Value after increment is: " +num+".<br>");
// g: num+= 7;
// h: document.write ("Value after addition is: "+num+".<br>");
// i: num--; 
// j: document.write ("Value after decrement is: "+num+".<br>");
// k: var reminder = num % 3;
// l: document.write ("The remainder is : "+reminder+".<br>");


// // 4. Cost of one movie ticket is 600 PKR. Write a script to
// // store
// // ticket price in a variable & calculate the cost of buying 5
// // tickets
// // to a movie. Example output:

// var price1ticket = "600 PKR";
// var price5ticket = (600) * (5); 
// document.write ("Total prie to buy 5 tickets to a movie is "+price5ticket+" PKR.")


// // 5. Write a script to display multiplication table of any
// // number in your browser. E.g

// var num = 7;
// document.write ("<h2> Table of "+num+".</h2><br>");
// for(var i=1; i<=10; i++){
//   document.write(num+"x"+i+"="+(num * i)+"<br>");
// };


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:

// °C to °F:

// var celsius = 25; 
// var intoFahrenheit = (celsius*9/5)+32;
// document.write (celsius+"°C is "+intoFahrenheit+"°F<br>");

// °F to °C:

// var fahrenheit = 70;
// var intoCelsius = (fahrenheit-32)*5/9;
// document.write (fahrenheit+ "°F is "+intoCelsius+"°C");


// // 7. Write a program to implement checkout process of a
// // shopping cart system for an e-commerce website. Store
// // the following in variables
// // a. Price of item 1
// // b. Price of item 2
// // c. Ordered quantity of item 1
// // d. Ordered Quantity of item 2
// // e. Shipping charges
// // Compute the total cost & show the receipt in your browser.

// document.write ("<h1>Shopping Cart</h1><br>");
// var prItem1 = 650;
// var quItem1 = 3;
// var prItem2 = 100;
// var quItem2 = 7;
// var shipCharges = 100;
// var totalCost = (650*3)+(100*7)+100;
// document.write ("Price of item 1 is "+prItem1+"<br> Quantity of item 1 is "+quItem1+"<br> Price of item 2 is "+prItem2+"<br> Quantity of item 2 is "+quItem2+"<br> Shipping Charges "+shipCharges+"<br><br> Total cost of your order is "+totalCost);


// // 8. Store total marks & marks obtained by a student in 2
// // variables. Compute the percentage & show the result in
// // your browser

// document.write ("<h1>Mark Sheet</h1><br>");
// var toTal = 980;
// var obtAIned = 804;
// var percENtage = (804/980)*100;
// document.write ("Total marks: "+toTal+"<br> Marks obtained: "+obtAIned+"<br> Percentage: "+percENtage+"%");


// // 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// // script to convert the total currency to Pakistani Rupees.
// // Perform all calculations in a single expression.
// // (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// // and 1 Saudi Riyal = 28 Pakistani Rupee)

// document.write ("<h1>Currency in PKR</h1><br>");
// var pkrCurrency = (10*104.80)+(25*28);
// document.write ("Total currency in PKR is: "+pkrCurrency);


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var num = 7;
// var arithmetic = ((7+5)*10)/2;


// // 11. The Age Calculator: Forgot how old someone is?
// // Calculate it!
// // a. Store the current year in a variable.
// // b. Store their birth year in a variable.
// // c. Calculate their 2 possible ages based on the stored
// // values.
// // Output them to the screen like so: “They are either NN or NN
// // years old”.

// var currentYear = 2023;
// var birthYear = 1995;
// var yourAge = (currentYear - birthYear);
// var age = (yourAge - 1);
// document.write ("They are either "+yourAge+" or "+age+" years old.");


// // 12. The Geometrizer: Calculate properties of a circle.
// // a. Store a radius into a variable.
// // b. Calculate the circumference based on the radius, and
// // output “The circumference is NN”.
// // (Hint : Circumference of a circle = 2 π r , π = 3.142)
// // Calculate the area based on the radius, and output “The
// // area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// var radius = 20;
// var circumference = ((2 * Math.PI)* radius);
// var area = (Math.PI * Math.pow(radius, 2));

// document.write ("<h1>The Geometrizer</h1><br> Radius of a circle: "+radius+"<br> The circumference is: "+circumference+"<br> The area is: "+area);


// // 13. The Lifetime Supply Calculator: Ever wonder how
// // much a “lifetime supply” of your favorite snack is?
// // Wonder no more.
// // a. Store your favorite snack into a variable
// // b. Store your current age into a variable.
// // c. Store a maximum age into a variable.
// // d. Store an estimated amount per day (as a number).
// // e. Calculate how many would you eat total for the rest of
// // your life.
// // Output the result to the screen like so: “You will need
// // NNNN to last you until the ripe old age of NN”.

// var snack = "chocolate";
// var myAge = 15 ;
// var maxAge = 65;
// var perDay = 3;
// var restLife = ((maxAge-myAge)*perDay);
// document.write ("You will need "+restLife+" to last you until the ripe old age of "+maxAge);

                                                                  // // -- END --