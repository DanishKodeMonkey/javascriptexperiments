/*

A ternary operator
is a shortcut for an 'if/else statement'
    it takes 3 operands
    1. a condition with ?
    2. an expression if true:
    3. an expression if false
syntax:
    condition ? exprIfTrue : exprIffalse
*/

let adult = checkAge(21);

function checkAge(age){
    //A way to read this is "Does age return as >= 18? If so, then true, otherwise: false;"
    return age >= 18 ? true : false;
}


//Another example
//in this example we invoke checkWinner with bool true
checkWinner(true);
//This is the function declared
function checkWinner(win){
    //is win true? If so, write YOU WIN!!!, otherwise: write You lose :(;
    win ? console.log("YOU WIN!!!"):console.log("You lose :(");

}