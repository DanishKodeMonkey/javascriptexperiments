//A variation of the while loop is the DO while loop
/*
A do while loop does 3 things:
    it DOES something(lol)
        THEN checks the condition,
            THEN it repeats IF true.
*/

/*in this example, taken from before, we declare the variable userName, but not define it
Because of this, the while loop will skip because it checks if the value is null.
To make this work, we will have to make it DO something first.
*/
let userName;
//So this time we use do, to FIRST open the prompt to enter a username.
do{
    userName = window.prompt("Enter your username");
    //AFTER that we use the while loop to check if userName equals nothing. And repeat if true.
}while(userName == "")

console.log("Hello", userName);
