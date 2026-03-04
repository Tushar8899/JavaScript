class User {
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`Username: ${this.username}`);
    
  }

 static createId(){           // static keyword k use se user ko show nhi hoti vo chij jha hum static lagate h  , vo computer k liye hoti h
    return `123`  
  }
} 

const tushar = new User("tushar")
console.log(tushar.createId());
