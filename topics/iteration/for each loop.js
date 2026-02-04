const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val) {       // for each loop hum array pe use krte h ,  or call back funtion ka name nhi hota isme , parenthesis ke andar hum kuch bhi use kr sakte h item,val etc ...
  //  console.log(val);
})

coding.forEach( (item) => {          // isme callbaack funtion me hum arrow funtion bhi use kr sakte h 
  console.log(item);
  
})

coding.forEach( (item , index , arr) => {         // foreach k andar hmare pass bhot sari chije aati h, value , index , or pura array bhi 
  console.log(item , index , arr);
  
}) 

const myCoding = [             // is tarike se hum array k andar k object ko iterate kr sakte h 
  {
    language :" javascript" ,
    extention : "js"
  } ,
   {
    language :" python" ,
    extention : "py"
  } ,
   {
    language :" java" ,
    extention : "j"
  } 
]

myCoding.forEach( (item) => {
  console.log(item.extention);
  
})