/*Spread operator allows an itterable such as
 an array or string to be expanded in places
 where zero or more arguments are expected
 (unpacks the elements)
 syntax operator: ...
 */

let numbers = [1,2,3,4,5,6,7,8,9]
console.log(...numbers);

//An example of when a spread operator is useful
//if you need to pass in a variety of arguments with a method

//In this case, had I just invoked Math.max to numbers, it would have returned NaN
//But since I unpact the array with the spread operator, the math function
//can handle it.
let maximum = Math.max(...numbers);


//Another example is how to unpack several arrays, and then re-assemble them

let class1 = ["Spongebob", "Patrick","Sandy"];
let class2 = ["Squidward", "Mr. Krabs","Plankton"];

//To add an element to an array, use the push method
//But we need to use the spread operator, or the entire array will just be shoved in. 
//instead of the individual items
class1.push(...class2);