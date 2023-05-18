//array.map() executes a provided callback function, once, for each array element
//AND creates a new array.

let numbers = [1, 2, 3, 4, 5];
//We will use the map function of an array to square each numbers in the above array, and create
//a new array.
let squares = numbers.map(square);

squares.forEach(print);

cube.forEach(print);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

function print(element){
    console.log(element);
}