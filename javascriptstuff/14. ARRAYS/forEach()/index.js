//array.forEach(element, index, array) executes a provided callback function, once, for each array element

//An example of its use coudl be with an array of names.
let students  = ["spongebob", "patrick", "squidward"];
//We then call the function, capitalize, within a function, forEach,(callback) and apply it to students 
students.forEach(capitalize);
//same with print
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1)
}

function print(element){
    console.log(element);
}
