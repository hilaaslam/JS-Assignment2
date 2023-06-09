// // 1. Declare an empty array using JS literal notation to store
// // student names in future.

// var studentsNames = [];


// // 2.Declare an empty array using JS object notation to store
// // student names in future.

//  studentNames = {
//    names: []
//  };
 

// // 3. Declare and initialize a strings array.

// snack = ["chips", "chocolate", "cookies"];


// // 4. Declare and initialize a numbers array.

// numbers = [1, 2, 3, 4, 5];


// // 5. Declare and initialize a boolean array.

// booleanArray = [true, false];


// // 6. Declare and initialize a mixed array.

// mixedArray = [1, "chips", true, null];


// // 7. Declare and Initialize an array and store available
// // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// // BS, BCOM, MS, M. Phil., PhD). Show the listed
// // qualifications in your browser like
// // Qualifications
// // 1)SSC
// // 2)HSC
// // 3)BCS
// // 4)BS
// // 5)BCOM
// // 6)MS
// // 7)M.  PHIL.
// // 8)PHD

// qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("Qualifications<br>");
// for (i = 0; i < qualifications.length; i++) {
//   document.write((i + 1) + ") "+qualifications[i]+"<br>");
// }


// // 8. Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:
// // SCORE OF Michael IS 320. PERCENTAGE IS: 64%
// // SCORE OF Jhon IS 230. PERCENTAGE IS: 46%
// // SCORE OF Tony IS 480. PERCENTAGE IS: 96%

// stdNames = ["Michael", "John", "Tony"];
// scores = [320, 230, 480];
// totalMarks = 500;
// for (i = 0; i < stdNames.length; i++) {
//  per = (scores[i] / totalMarks) * 100;
//   document.write("SCORE OF "+stdNames[i]+" IS "+scores[i]+". PERCENTAGE IS: "+per.toFixed(2)+"%<br>");
// }


// //9. Initialize an array with color names. Display the array
// //elements in your browser.
// //a. Ask the user what color he/she wants to add to the
// //beginning & add that color to the beginning of the array.
// //Display the updated array in your browser.
// //b. Ask the user what color he/she wants to add to the end
// //& add that color to the end of the array. Display the
// //updated array in your browser.
// //c. Add two more color to the beginning of the array.
// //Display the updated array in your browser.
// //d. Delete the first color in the array. Display the updated
// //array in your browser.
// //e. Delete the last color in the array. Display the updated
// //array in your browser.
// //f. Ask the user at which index he/she wants to add a color
// //& color name. Then add the color to desired
// //position/index. . Display the updated array in your
// //browser.
// //g. Ask the user at which index he/she wants to delete
// //color(s) & how many colors he/she wants to delete. Then
// //remove the same number of color(s) from user-defined
// //position/index. . Display the updated array in your
// //browser.

// colors = ["black", "pink", "purple"];
// document.write("Original Array: "+colors+"<br>");
// beginningColor = prompt("Enter a color to add to the beginning:");
// colors.unshift(beginningColor);
// document.write("Array after adding color to the beginning: "+colors+"<br>");
// endColor = prompt("Enter a color to add to the end:");
// colors.push(endColor);
// document.write("Array after adding color to the end: "+colors+"<br>");
// colors.unshift("blue", "red");
// document.write("Array after adding two colors to the beginning: "+colors+"<br>");
// colors.shift();
// document.write("Array after deleting the first color: "+colors+"<br>");
// colors.pop();
// document.write("Array after deleting the last color: "+colors+"<br>");
// addIndexNum = prompt("Enter the index number where you want to add a color:");
// let addIndexColor = prompt("Enter the color to add at index "+addIndexNum+":");
// colors.splice(addIndexNum, 0, addIndexColor);
// document.write("Array after adding color at index "+addIndexNum+": "+colors+"<br>");
// deleteIndex = prompt("Enter the index from where you want to delete color(s):");
// removeColor = prompt("Enter the number of colors you want to remove:");
// colors.splice(deleteIndex, removeColor);
// document.write("Array after deleting color(s) from index "+deleteIndex+": "+colors+"<br>");


// // 10. Write a program to store student scores in an array & 
// // sort the array in ascending order using Array’s sort 
// // method.
// // SCORES OF STUDENTS : 320 , 230 , 480 , 120
// // ORDERED SCORE OF STUDENTS :120 , 230, 320 , 480

// stdScores = [320, 230, 480, 120];
// document.write("SCORES OF STUDENTS: "+stdScores+"<br>");
// stdScores.sort((a, b) => a - b);
// document.write("ORDERED SCORE OF STUDENTS: "+stdScores+"<br>");


// // 11. Write a program to initialize an array with city names. 
// // Copy 3 array elements from cities array to selectedCities 
// // array.
// // Cities List: 
// // karachi,queta,lahore,islamabad,peshawar
// // selected cities list:
// // islamabad,quetta

// cities = ["Karachi", "Quetta", "Lahore", "Islamabad", "Peshawar"];
// selectedCities = cities.slice(1, 4);
// document.write("Cities List: "+cities+"<br>");
// document.write("Selected Cities List: "+selectedCities+"<br>");


// // 12. Write a program to create a single string from the 
// // below mentioned array:
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// // use array joined method

// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");
// document.write(singleString);

//13. Create a new array. Store values one by one in such a way
//that you can access the values in the order in which they 
//were stored. (FIFO-First In First Out)
//devices:
//keyboard,mouse,moniter,printer
//out:
//keyboard
//out:
//mouse:
//out:
//moniter
//out:
//printer

// fifo = ["keyboard", "mouse", "moniter", "printer"];
// document.write("Out: "+fifo.shift()+"<br>"); 
// document.write("Out: "+fifo.shift()+"<br>"); 
// document.write("Out: "+fifo.shift()+"<br>"); 
// document.write("Out: "+fifo.shift()+"<br>"); 


// // 15. Write a program to store phone manufacturers (Apple,
// // Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// // Display the following dropdown/select menu in your 
// // browser using document.write() method:

// phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (let i = 0; i < phoneManufacturers.length; i++) {
//   document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");


                                                  // // -- END --