

//Math is a intrinsic object that provides basic mathematics functionality and constants

//example

let x = 3.14;

//We need that rounded, use math.

x = Math.round(x);

//show in console

console.log(x);

//Other use examples

/*
--Floor will always round down--
x = Math.floor(x);

--Ceil will always round up--
x = Math.ceil(x);

--pow(er) will give the base value in the power of the input value.--
x = Math.pow(x, 3);

--sqrt, or squareroot, gives the squareroot of a value
x = Math.sqrt(x);

--The (abs)olute value will give the distance the value is from 0
x = Math.abs(x);


*/

//For the next example we will need a few more variables
//We will try to find the maximum, and minimum number of all the variables so far.
let y = 5;
let z = 9;
let maximum;
let minimum;
maximum = Math.max(x,y,z);
//will return 9, as it is the biggest number of the 3
minimum = Math.min(x,y,z);
//will return 3.14, as it is the smallest number.

//if we ever need the actual number of pi, math got us covered too:
//  x = Math.PI; will return 3.141592653589793 etc etc etc.

