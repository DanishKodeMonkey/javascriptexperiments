// Function Expressions
/* 
Function Expressions are functions without a name
ALso known as anonymous functions
Benefit is that it helps to avoid polluting the global scope with mass of functions
You write it, and forget about it
*/

//as an example here is how a function could be used to print hello to console

/*
//Invoke function
sayHello()

//function
function sayHello(){
    console.log("Hello!");
}
*/

//performing such a simple task can be done much faster with throwaway code.
//Therefore: FUNCTION EXPRESSIONS!

//We will simply assign a function, to a variable, in this case a constant.
const greeting = function(){
    console.log("Hello!");
}

//And invoke the variable
greeting();

//Another example, a counter(see HTML)
//If using function declaration, think out 2 unique names to invoke the function to the HTML
//we will lalso handle the counting here
let count = 0;

//In classic function fashion we would plot out both functions seperately.
/*
//here we have a unique function name increaseCount
function increaseCount(){
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}
//same here, decreaseCount
function decreaseCount(){
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}
//see HTML on how to invoke
*/

//We can do this easier with function expressions throwaway code

//We fetch the button by id, and on click, we invoke a functon expression
document.getElementById("increasebutton").onclick = function(){
    //What happens on click?
    count+=1;
    //change label
    document.getElementById("myLabel").innerHTML = count;
}
//repeat for decreasebutton
document.getElementById("decreasebutton").onclick = function(){
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}

//after this is done, this code is thrown.