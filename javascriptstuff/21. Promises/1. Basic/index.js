/**
 * PROMISE
 * promise is an object that encapsulates the result of a asynchronous operation
 * it lets asynchronous methods return values like synchronous methods
 * "I promise to return something in the future"
 */

/**
 * Promises have a STATE
 * A state is 'pending', then it's either 'fulfilled' or 'rejected'.
 * The RESULT is what can be returned
 * there are 2 parts to a promise: producing & consuming 
 * 
 * The producing code is what's below, from creating const promise, to 
 * closing the arrow callback.
 * 
 * And the consuming code, what is done after the promise result is resolved
 */

/** EXAMPLE 1, REMOVE COMMENT TO TEST
//-= PRODUCTION CODE, THE PRONMISE=-
//To create a promise, like other objects, create a object from the Promise class
//You can list a callback, function, or arrow function expression
//in this example there are two arguments, resolve, and reject
//if callback is succesfull, invoke resolve, if not, invoke reject.
const promise = new Promise((resolve, reject) => {
    //A fake fileLoaded success/False trigger
    let fileLoaded = true;

    //If fileLoaded is true, execute
    if(fileLoaded){
        resolve("File loaded");
    }
    //If fileLoaded is false, execute.
    else{ 
        reject("file NOT loaded")
    }

});

//-=CONSUMING CODE, THE USE OF RESULT FROM PROMISE=-
//when promise is resolved, THEN value(from promise) should be printed to console.
promise.then(value => console.log(value))
        //If promise is REJECTED, print reject error to console.
        .catch(error => console.log(error));
*/

//Lets try this with some asynchronous code.
//we will wait 5 seconds, then display a message
//We will therefore name this promise: wait
//and precede the promise, with an argument, time.
const wait = time => new Promise(resolve =>{
    setTimeout(resolve, time);
})
//You dont NEED to return a value when resolving, instead we just print a message.
//you can ALSO pass in a argument when creating a promise, in this case 3000 ms
wait(3000).then( () => console.log("Thanks for waiting!"));