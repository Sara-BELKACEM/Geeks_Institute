const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

resolvedPromise
  .then((value) => {
    console.log("Resolved with:", value); 
  });

rejectedPromise
  .catch((error) => {
    console.log("Rejected with:", error); 
  });


// More simple:
// Promise.resolve(3).then(console.log);   
// Promise.reject("Boo!").catch(console.log); 
