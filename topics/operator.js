/*//Calculate the finalTotal for a purchase. The business logic is
const price = 250;  // Price per item
const quantity = 4;   // Number of items
const discount = 50;  // A flat ₹50 discount
const taxRate = 0.18; // 18% GST

const finalTotal = (( price*quantity) - discount )* (1+taxRate);
console.log(finalTotal);

// spliting the bill between people (arithmetic operators )
const totalBill = 1475; // The total bill in Rupees
const numberOfPeople = 6;  // The number of people splitting the bill

const  remainingAmount = ( totalBill%numberOfPeople);
console.log( ` the remaining amount is ${remainingAmount}`);
const amountPerPerson = Math.floor( totalBill/numberOfPeople); //  math.floor decimal k badh k digit ko show nhi krta 
// console.log(`The amount each person pays ${amountPerPerson}`);


// tracking player score (assignment operators)
let score = 1000;
 console.log(`the initial score is ${score}`);
// level completed 
score += 250;
console.log(`after completed level score is ${score}`);
// hit obstacle 
score -= 100;
console.log(`after hitting obstacle score is ${score}`);
// bonus 
score *= 2;
console.log(`after getting bonus score is ${score}`);
console.log(`And the final score is ${score}`); 

//Check if a visitor meets the criteria.( comparison operator )
const visitorAge = 14;    // The visitor is 14 years old
const visitorHeight = 160; // The visitor's height in cm
const isOldEnough = visitorAge >= 12 ;
console.log( isOldEnough);
const isTallEnough = visitorHeight > 140 ;
console.log(isTallEnough);
const isNotTall = visitorHeight < 190 ;
console.log(isNotTall);


//Combine multiple security checks into a single boolean variable ( logical operator )
const isAuthenticated = true;  // The user has logged in successfully.
const isAdmin = false;         // The user is NOT an administrator.
const isSuperAdmin = true;     // The user IS a super-administrator.
const isAccountActive = true;  // The user's account is active.

const hasAccess = isAccountActive && isAuthenticated && (isAdmin || isSuperAdmin);
console.log(`User has access to the dashboard: ${hasAccess}`);


//The Ternary Operator (Use the ternary operator to determine the correct color code.)

const isDarkMode = false; // The user has selected light mode
const backgroundColor = isDarkMode ? "#333333" : "#FFFFFF" ;
console.log(`the background color is ${backgroundColor}`); 

//Bitwise operator 
const READ_PERMISSION = 4;    // in binary this is 100
const WRITE_PERMISSION = 2;   // in binary this is 010
const EXECUTE_PERMISSION = 1; // in binary this is 001
const userPermission = READ_PERMISSION | EXECUTE_PERMISSION ;
const canWrite = (userPermission&WRITE_PERMISSION);
console.log(canWrite);
console.log(userPermission);*/



