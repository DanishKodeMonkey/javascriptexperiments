/*
If statements are a basic form of decision making
    if a condition is true, do something. Like a subset of code
    if not, dont do it.
*/
//For this example we will need a variable
let age = 21;
/* The syntax of a if statement is as follows
if the statement within the paranthesis () is true, then execute the code in the curly braces{}
if the statement is false, dont do it.
so: */

if(age >= 18){
    console.log("You are an adult!");
}

//So what hpapens now is:
/*
    We have a variable called age, with the value of 21.
        the if statement checks if the value of the age variable is bigger than, or equal to 18.
            Since this statement is true, the if statement executes the code in {}.
            If the statement was false, if the value was below 18, the code in the {} would be skipped.
*/

//We can also check if something else is true, if the above is false.
else if(age < 0){
    console.log("You haven't been born yet!");
}
//You can add as many else if statements that you want, they will be checked in order.
//Because of this, the first statement would pass first, and execute its function,
//if you want it to work, this statement would have to go in the first if statement.
else if(age >= 65){
    console.log("You are an elder!");
}

//If everything above is still false, execute the else function, the last function to close the loop
else{
    console.log("YOU ARE A CHILD! BEGONE!");
}
