/*
Nested functions are much like nested loops

It is a function inside another function

Outer functions have access to inner functions
Inner functions are "hidden" from outsided the outer function
used in closures(security)
*/
//The following way uses traditional setups of functions
//But pose a security risk, as you can simply just
//call any of the functions, to bypass the login
/* DANGEROUS- DO NOT USE
let userName = "DKM";
let userInbox = 0;
function login(){
    displayUserName();
    displayUserInbox();
}
function displayUserName(){
    console.log(`Welcome ${userName}`);
}
function displayUserInbox(){
    console.log(`You have ${userInbox} new messages`)
}
*/

//instead, use nested functions!

let userName = "DKM";
let userInbox = 0;

login();

function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`)
    }
}

//now we CANNOT access the nested functions, without passing the outer function first.
