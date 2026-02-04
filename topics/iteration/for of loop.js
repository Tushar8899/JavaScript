// for of loop 

const arr = [1,2,3,4,5]

for (const num of arr) {          // for of loop array , string , object sab pr lag sakta h , or ye ek ek character me output deta hai 
  console.log(num);
  
}

// maps 

const map = new Map()            // map bhi hmara object hi hota h par isme duplicate values nhi hoti , or isme order bhi follow hota h 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
console.log(map);
 
for (const [key, value] of map) {              // ye maps ko iterate krane ka tarika h ,(key,value) se
console.log(key, '-', value);
} 

const myObject = {
'game1': 'NFS',
'game2': 'Spiderman'
}
for (const [key, value] of myObject) {        // objects aise iterate nhi ho sakte [] square bracket se 
console.log(key, '-', value);
} 


