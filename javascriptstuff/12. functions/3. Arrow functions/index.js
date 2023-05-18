//Arrow functions work as compact alternatives to a traditional function expression
// syntax : =>

/*
//Lets make a greeter, first in old-school function expression
const greeting = function(userName){
    console.log(`hello ${userName}`);
}

//and invoke.
greetings("Bro");

*/
//Lets convert this to using the arrow function expression
//elemenate "function" use arrow instead.
//eleminate paranthesis(), keep in mind you will need them if you use more than 1 argument.
//You can eleminate curlies{} too, keep in mind that you will need them if the function
//uses more than one statement tho.
const greeting = userName => console.log(`hello ${userName}`);

//and invoke.
greetings("Bro");


//Second example! A percentage converter
//again, function expression classic mode here:
/*
const percent = function(x, y){
    return x / y * 100;
}

console.log(`${percent(75,100)}%`);

*/

//And arrow function expression here
//Notice paranthesis there due to 2 arguments.
const percent = (x, y) => x / y * 100;

console.log(`${percent(75,100)}%`);


//Another one, using grades from earlier.:
/*
let grades = [100, 50, 90, 60, 80, 70];

grades.sort(descending);
grades.forEach(print);

function descending(x, y){
    return y - x;
}
function print(element){
    console.log(element);
}
*/

//If we are to write this using function expressions, we will instead throw an arrow in each of the methods

let grades = [100, 50, 90, 60, 80, 70];
//simply get rid of the function names, and paste the functions inside the methods as an argument.

grades.sort((x, y) => y - x );
grades.forEach(element => console.log(element));

//So much cleaner!