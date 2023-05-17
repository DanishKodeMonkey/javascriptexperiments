// Callback is a function passed as an argument to another function.
// Popular because it ensures a function does not run before a task is complete
/*
It ensures that a function is not going 
to run before a task is completed
it helps develping asynchronous code
(one function has to wait for another)
this helps to avoid errors and potential problems
ex. wait for file load.
*/

//example:

/* Originally we would need some functions like these to even get this to work.

//We define a variable called total, that evokes the sum function, with 2, and 3 as arguments
let total = sum(2, 3);
//After finishing that, we will then evoke the displayConsole, function, with total as its argument.
displayConsole(total);


//Function for sum
function sum(x, y){
    let result = x + y;
    return result

}
*/

//however, with call backs, all we need is this:
//Remember not to include () or you will invoke the function
//Invoke the function sum, with argument 2, and 3. And send result to displayConsole(callback)
sum(2, 3, displayConsole);

//function for sum.
function sum(x, y, callback){
    let result = x + y;
    //invoke function callback
    callback(result);
}
//function for displayConsole
function displayConsole(output){
    console.log(output);
}

//
function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}