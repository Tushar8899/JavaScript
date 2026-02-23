// important = fetch() ki special queue banti h jab usko use krte h uska name hota h micro task queue , or priority queue , or async ki alag task queue  banti h 
//fetch() is a built-in browser function that goes to a URL, asks for data (or sends data), and brings a response back.

async function getData() {
  // 1. We FETCH the data and wait for the response
  const response = await fetch('https://api.example.com/data');
  
  // 2. We check if the response was successful 
  if (!response.ok) {
    throw new Error('Network response was not ok!');
  }

  // 3. We parse the response into JSON (a JavaScript object)
  const data = await response.json();
  
  console.log(data);
}