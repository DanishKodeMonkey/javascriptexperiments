//a variable is a container for storing data
//a variable behaves as if it was the value that it contains

//A variable consist of two steps
//Declaration(var,let,const)
//Assignment (=assignment operator)
//You can do these together, or seperately.

let age; //define a let variable called age
age = 21; //assign the number of 21 to the variable called age
/*
Another way would also be to both define the variable and its value in one line:
let age = 21;
*/


let firstName = "Danish"; //Again, but with a string
let student = false;      //again, but with boolean.

//Numbers can be used in arithmatic expressions, strings cannot

/* =================================================================================
ARITHMETIC EXPRESSION
Is a combination of:
operands (values, variables, etc.)
operators ( + - * / %)
that can be evaluated to a value
ex y = x + 5;
or 
students = students + 1;
or even better, use augmented assignment operator, combining the above statement into one by:
students += 1;
Basically, a shortcut to re-assign the same variable

Another thing to keep in mind is operator precedence:
1. Paranthesis ()
2. Exponents
3. multiplication & division
4. addition & subtraction
Just like in normal arithmatics.

=====================================================================================*/

age = age + 1;
//now prints to console as number 22.
//If we do this to a string
firstName = firstName + 1
//It just adds the number 1 to the end of the name

console.log("Hello", firstName);
console.log("You are", age);
console.log("Enrolled:", student);

//See HTML for how to display something in the browser window.
//displaying javascript things in html, javascript part:
//If we need to change the inner html of the paragraphs tags, use:
document.getElementById("p1").innerHTML = "Hello " + firstName
document.getElementById("p2").innerHTML = "You are " + age + " years old"
document.getElementById("p3").innerHTML = "Enrollment status:" + student