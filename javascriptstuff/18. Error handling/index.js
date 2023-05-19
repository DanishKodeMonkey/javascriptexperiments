/**
Errors are objects with a description of
something that went wrong

examples of errors:
Cant open a file
lose connection
user types incorrect input
typerror

another type of error is a throw
throw = executes a user-defined error
*/

/*
To gracefully handle errors
surround any dangerous coded with a try block.
Dangerous code is any code that could cause an error
except user input which is almost always dangerous.
because you dont know whats input 
*/

/* Uncomment to try.

//Simply wrap whatever code you want tested in a try block
try{
//Example of typerror(typo)
console.lag();
}
//And end it with a catch block, "If this error happens, do this instead"
//In this example we just use a catch all error.
catch(error){
    console.log(error);
}
*/

//example of a throw, user input error.

try{
    let x = window.prompt("Enter a number");
    x = Number(x);
    //if x is not a number, throw "That wasnt a number!"
    if(isNaN(x)) throw "That wasn't a number!";
    //If x is blank, throw "That was empty!"
    if( x == "") throw "That was empty!";

    console.log(`${x} is a number`)
}
catch(error){
    console.log(error);
}
//After everything else, no matter what happens, finally will execute at the end of the program.
//Good for cleanup
finally{
    console.log("This always executes")
}
/*
If the user types in a NaN it wont interrupt the program, 
however somethign definately went wrong.
You can catch such errors using a throw catch in a if statement