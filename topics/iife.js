// Immediately invoked function ex(pressions (IIFE) 
(function chai(){                                      // ye named iife hoti h 
  console.log(`hey , i am here `);
  
})();  // is ko end krne ki jarurat hoti h , or isko end krne k liye hum ; ka use krte h 
 // () this second one is use for execution 
// iife use kiya jata h , jo global sccope k polutions , or variable hote h unko hatane k liye 

(() => {
  console.log(`i am here`);
  
}
) ();  // isko hum unnamed iife bhi bolte h 