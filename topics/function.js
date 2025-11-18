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

