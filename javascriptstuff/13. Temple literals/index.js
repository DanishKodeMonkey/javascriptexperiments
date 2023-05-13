/*
Temple literals are delimited with (`)
    They are used instead of double or single quotes
    They allow embedded variables and expressions
*/

let userName = "Kode";
let items = 3;
let total = 100;
/*
console.log(`Hello ${userName}`);
console.log(`Ỳou have ${items}`)
console.log(`Your total is DKK${total}`);
*/
//A even more effecient and clean way to write the above is to put it all in a variable.

let text =
`Hello ${userName}<br>
Ỳou have ${items}<br>
Your total is DKK${total}<br>`

console.log(text);
//This is especially useful when you have to update the text of a element in HTML, especially multi line.
document.getElementById("myLabel").innerHTML = text;