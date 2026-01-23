const user = {
  username: "tushar",
  price: 999,

  welcomemessage : function() {
    console.log (`${this.username}, welcome to website `);   // here This. is used for current context or inside the curly brases. and this is only used in object 
  } 
}
// user.welcomemessage()
// user.username = "sam"   // here current context is changed 
// user.welcomemessage() 

// console.log(this);   // this is empty in the local computer because it use node , and in the browser it shows window because window is the global object 

// function coffee(){
//   console.log(this);
  
// }
// coffee()
 
// const coffee = function(){
//   let username = "tushar"
//   // console.log(this);
  
// }
// // coffee()
// const coffee = () => {
//   let username = "tushar"
//   // console.log(this);
  
// }
// // coffee()

// arrow funtion k andar this empty output deta h , or normal funtion k andar this global screen k chije dikhata h 

// const addTwo = (num1, num2) => {
//   return num1 + num2

// }

const addTwo = (num1, num2) => (num1 + num2)  //isko hum bolte k implicit result 

console.log(addTwo(3,4))