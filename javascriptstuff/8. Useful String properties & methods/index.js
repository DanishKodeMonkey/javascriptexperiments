//useful string properties & methods

let userName = "Danish Kode"

//variablename.length, returns the length of a variable.
//you can assign this to a variable, 
//or just print to console log.
console.log(userName.length)

//Find the first character of hte string, and assign it to firstLetter
let firstLetter = userName.charAt(0);

//some more examples

//finds the index of selected character
userName.indexOf("o");

//last use of letter o
userName.lastIndexOf("o");

//rids all spaces, assigns return to userName
userName = userName.trim();

//all uppercase
userName.toUpperCase();

//all lowercase
userName.toLowerCase();

//replaces all of one value with another
userName = userName.replaceAll("D", "O")

