/*
Array = A variable that can store multiple values
to turn a variable into an array, simply use [ and divide each value by a , ]
*/

let fruits = ["apple", "orange", "banana"];
//To access an entire array, simply invoke the array
console.log(fruits)
//To access a specific value in a array, use brackets when invoking the array, and specify the item index.
console.log(fruits[0]);

//To change the contents of an array, invoke the array, the index, and change its value
fruits[2] = "coconut";

//to add a value to an array, use the push method
fruits.push("lemon");   //adds an element
fruits.pop();           //removes last element
fruits.unshift("mango") //add element to beginning of array
fruits.shift()          //Removes element from beginning

//you can also access various parts of a array

//Find the length of an array
let length = fruits.length;
console.log(length);
//Find the index of a specific item in the array
let index = fruits.indexOf("apple");
//if this returns a -1 it means the item does not exist.
console.log(index);