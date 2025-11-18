 function sayMyName (){
  console.log("tushar");

  
 }
 
//  sayMyName // it is the function name and function reference.
sayMyName() // it is function execution 

function addTwoNumbers ( number1 , number2) {
  // console.log(number1+number2);
  return number1+number2 ; // it return the value that you can store in const and let.
  
}
// const result = addTwoNumbers( 6,4);
// console.log("Result: ", result);

// function loginUserMessage ( username) {
//   return `${username} just logged login`
// }

// console.log(loginUserMessage("Tushar"))

function loginUserMessage(username = "user"){  // here username by default user
    if(!username){                                       // if not equal to username then run this console.log
      console.log("please enter the username");
      return;                                            // stop here
      
    }
    return ` ${username} just logged in `

}
console.log(loginUserMessage("father"));       // here overwrite the username value 

function calculateCartPrice( ...num1){             // ... is the rest operator , ye bhot sari value ko ek sath dikhane ka kam krta h
  return num1
}
console.log(calculateCartPrice( 228 ,33, 3,244,23,));

const user = { 
  name : " tushar ",
  roll : 21
}
 
function handleObject(anyObject){
  console.log(`username is ${anyObject.name} and roll no is ${anyObject.roll}`);
  

}

handleObject(user)       // we can directly use object instead of user objecct 

const myNewArray = [200,400,5000,600]
function returnSecondValue (getArray){       // getArray is the ;parameter name 
  return getArray[1]
}
console.log(returnSecondValue(myNewArray));       // actual array is the arguments   , we can directly use array instead of myNewArray

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Callback function
function displayResult(result) {
    console.log(`The result is: ${result}`);
}

// Function that uses callback
function calculate(a, b, callback) {
    const sum = a + b;
    callback(sum); // Execute the callback with the result
}

calculate(5, 3, displayResult); // Output: "The result is: 8"

