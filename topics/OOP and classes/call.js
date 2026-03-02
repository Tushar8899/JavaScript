function SetUsername(username){
  //complex DB calls 
  this.username = username
}

function createUser(username, email, password){
  // SetUsername(username)    // yha oe ye call hi nhi hua h , bss iska reference diya h humne , isko show krne k liye hum .call use krenge , or perameter me this denge 
    SetUsername.call(this, username)
  this.email = email
  this.password = password
}

const user = new createUser("tushar", "tushar01.com" , "123")
console.log(user);

// interview question = call ka kya use h , or isko kese use krte h 