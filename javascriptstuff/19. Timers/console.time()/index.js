/**
 * console.time() starts a timer you can use to
 * track how long an operation takes
 * you can give each tiemr a unique name.
 */

//Example time that will print to console:
    //start - Response time is the name of the timer
console.time("Response time");

//A button that has to be pressed while timer is recording
alert("CLICK THE OK BUTTON!")

//Example of asynchronous operations arent tracked.
setTimeout(() => console.log("HELLO!"), 3000)

    //end
console.timeEnd("Response time")