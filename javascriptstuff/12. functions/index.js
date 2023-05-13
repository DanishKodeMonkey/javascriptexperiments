/*
Functions defines code once, to be used many times
    to perform some code, call the function name.

Functions are honestly the purest form of "We dont like to repeat code more than once."
*/
//Here we will define global variables, functions have access to global variables
//Global variables are variables that are declared outside any function or {}
let userName= "Kode";
let age = 21;

//If we made them local variables, like below, we wouldnt be able to invoke them in a later function
//as they only exist locally, in that scope.
function startProgram(){
    let userName= "Kode"
    let age = 21;
    //however, if we invoke happyBirthday in the scope, and declare the userName and age,
    //they will be sent outside this scope, to the function.
    //These are known as arguments.
    happyBirthday(userName, age);
}

//To invoke, or call a function, just type the function name with paranthesis and break.
//happyBirthday();
//this will invoke the function once.


//Now, when we declare the function, we need matching parameters for the arguments above, just copy
//them from before.
function happyBirthday(userName, age){
    console.log("Happy birthday to you!")
    console.log("Happy birthday to you!")
    console.log("Happy birthday dear", userName,"!")
    console.log("Happy birthday to you!")
    console.log("Happy birthday to you!")
    console.log("You are", age," years old!")
}
