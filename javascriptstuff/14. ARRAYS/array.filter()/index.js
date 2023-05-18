//The filter method creates a new array with all elements that pass the test provided by a function

let ages = [18, 16, 21, 17, 19, 90];

//Now lets filter this array for any ages of 18 and older, and create a new array with those values
//We do this by creating a new array, that holds ages, filtered using the checkAge function.
let adults = ages.filter(checkAge);

//We then check the adults array, and for each item in it, we execute the print function.
adults.forEach(print);

//Here is the checkAge callback function, which checks whatever element is input(in this case ages) and returns any value equal or above 18.
function checkAge(element){
    return element >=18;
}

//simply a print callback function, any element(in this case adults) input, print to console.
function print(element){
    console.log(element);
}