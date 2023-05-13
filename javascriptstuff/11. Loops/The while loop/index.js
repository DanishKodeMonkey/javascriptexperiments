/*
The while loop repeats some code
    while some condition is true
    potentially infinitely!
*/

let userName = ""

//SO the way to read a while loop is:
//WHILE this condition is true, repeat this code!
//in this example that would be
//WHILE userName is equal to ""(blank), OR WHILE userName == null(nothing) repeat this code {}!
while(userName == "" || userName == null){
    username = window.prompt("Enter your name");

}
//once the while loop ends(and a user has entered a name), the userName will be updated, and we 
//can print the result below.
console.log("Hello", userName);

//A way a while loop can be potentially dangerous, is if a while statement is put in a inescapeable loop...

while(1 == 1){
    console.log("HELP!")
}

//This will cause the browser to just keep looping forever, because 1 will always be 1. Potentially crashing the browser...
