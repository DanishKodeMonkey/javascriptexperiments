
//Rest parameters = represents an indefinite number of parameters
//packs arguments into an array

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

/*
if we wanted to find the sum total of the above 
variables, we would have to input each of them into a sum function.
But with varying amounts of variables to handle, this might not be feasable
say we have 3 to start
we would display these sums by
console.log(sum(a, b, c));
but any time another variable appears, this function no longer works.

to fix this, use a rest parameter to represent a varying number of parameters instead.
*/

//Here we call a varying amount of variables, and pack them into the parameters, using ""...""
function sum(...numbers){
    //We can then run the function, and pass any number of parameters through.
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}