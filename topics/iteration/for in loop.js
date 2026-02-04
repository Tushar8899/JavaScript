// for in loop , hum object ko iterate krne k liye use krte h 

const myObject = {
   js: 'javascript',
   cpp: 'C++',
   rb: "ruby",
   swift: "swift by apple"
}

for (const key in myObject) {
console.log(`${key} shortcut is for ${myObject[key]}`) ;
}

// for in loop hum array pr bhi use kr sakte but jab hum isme keys print karainge to vo 0 , 1, 2, 3, aise output dega 
const programming = ["js", "rb", "py", "java", "cpp"]
   for (const key in programming) {
   console.log(key);                                     // kyuki by default array ki keys 0 1 2 3 5 aise hoti h 
}