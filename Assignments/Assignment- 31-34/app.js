// // 1. Write a program that displays current date and time in 
// // your browser.

// var dateTime = new Date();
// document.write(dateTime);

// // 2. Write a program that alerts the current month in words. 
// // For example December.

// var date = new Date();
// var month = date.getMonth();
// var monthNames = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// var currentMonth = monthNames[month];
// alert("Current Month: "+currentMonth);


// // 3. Write a program that alerts the first 3 letters of the current
// // day, for example if today is Sunday then alert will show 
// // Sun

// var date = new Date();
// var day = date.getDay();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDayAbb = dayNames[day].slice(0, 3);
// alert("Current Day: "+currentDayAbb);


// // 4. Write a program that displays a message “It’s Fun day” if 
// // its Saturday or Sunday today

// var day = new Date().getDay();
// if (day === 0 || day === 6) {
//   alert("It's Fun day");
// } else {
//   alert("It's not Fun day");
// }


// // 5. Write a program that shows the message “First fifteen 
// // days of the month” if the date is less than 16th of the month 
// // else shows “Last days of the month”.

// var monthsDay = new Date().getDate();
// if (monthsDay < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }


// // 6. Write a program that determines the minutes since 
// // midnight, Jan. 1, 1970 and assigns it to a variable that 
// // hasn't been declared beforehand. Use any variable you like 
// // to represent the Date object.

// var time = new Date().getTime();
// var minutes = Math.floor(time / (1000 * 60));
// document.write("Minutes since midnight, Jan. 1, 1970:", minutes);


// // 7. Write a program that tests whether it's before noon and 
// // alert “Its AM” else “its PM

// var hour = new Date().getHours();
// if (hour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }


// // 8. Write a program that creates a Date object for the last day 
// // of the last month of 2020 and assigns it to variable named 
// // laterDate

// laterDate = new Date(2020, 11, 31);
// document.write(laterDate)


// // 9. Create a date object of the starting date of this Ramadan 
// // and alert the number of days past since 1st Ramadan?
// // Note: 1st Ramadan was on June 18, 2015

// var date = new Date("April 13, 2023");
// var firstRamadan = new Date("June 18, 2015");
// var milliseconds = date.getTime() - firstRamadan.getTime();
// var days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
// alert("Number of days past since 1st Ramadan: " + days);


// // 10. Write a program that displays in your browser the 
// // seconds that elapsed between the reference date and the 
// // beginning of 2015.

// var reference = new Date();
// var beginning = new Date("January 1, 2015");
// var secondsDiff = Math.floor((reference - beginning) / 1000);
// document.write("Seconds elapsed since the beginning of 2015: "+secondsDiff);


// // 11. Create a Date object for the current date and time. 
// // Extract the hours, reset the date object an hour ahead and 
// // finally display the date object in your browser.

// var date = new Date();
// var hours = date.getHours(); 
// document.write("current date: " +date+" <br>");
// date.setHours(hours + 1);
// document.write("one hour ago, it was "+date); 


// // 12. Write a program that creates a date object and show the 
// // date in an alert box that is reset to 100 years back?

// var date = new Date();
// date.setFullYear(date.getFullYear() - 100); 
// alert(" 100 years back It was sun: "+date);


// // 13. Write a program to ask the user about his age. Calculate 
// // and show his birth year in your browser.

// var age = prompt("Enter your age!"); 
// document.write("your current age is "+age+"<br>")
// var date = new Date(); 
// var birthYear = date.getFullYear() - age; 
// document.write("Your birth year is: " + birthYear);


// // 14. Write a program to generate your K-Electric bill in your
// // browser. All the amounts should be rounded off to 2 
// // decimal places. Display the following fields:
// // a. Customer Name
// // b. Current Month
// // c. Number of units
// // d. Charges per unit
// // e. Net Amount Payable (within Due Date)
// // f. Late Payment Surcharge
// // g. Gross Amount Payable (after Due Date)
// // Where,
// // Net Amount Payable (within Due Date) = Number of units * Charges per unit
// // & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// var customerName = prompt("Enter your name:");
// var currentMonth = new Date().toLocaleString('default', { month: 'long' });
// document.write(currentMonth)
// var unitsNumber = prompt("Enter the number of units:"); 
// var chargesPerUnit = 15;
// var netAmount = unitsNumber * chargesPerUnit; 
// var latePayment = 250;
// var grossAmount = netAmount + latePayment;
// document.write("<h1>K-Electric Bill</h1>");
// document.write("<p>Customer Name: "+customerName+"</p>");
// document.write("<p>Month: "+currentMonth+"</p>");
// document.write("<p>Number of units: "+unitsNumber+"</p>");
// document.write("<p>Charges per unit: "+chargesPerUnit.toFixed(3)+"</p>");
// document.write("<p>Net Amount Payable (within Due Date): "+netAmount.toFixed(3)+"</p>");
// document.write("<p>Late Payment Surcharge: "+latePayment.toFixed(3)+"</p>");
// document.write("<p>Gross Amount Payable (after Due Date): "+grossAmount.toFixed(3)+"</p>");



                                                                        //  -- END --