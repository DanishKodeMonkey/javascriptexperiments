/*
SO, how to accept user input in javascript

There are two ways, basically.

The easy way, using a window prompt
*/
    //Define a let variable called username, that when called calls up a window prompt asking for a name
// let username = window.prompt("What's your name?");
    //print the name in console.
// console.log(username);

/*
or the hard way, using a HTML textbox. Albeit more practical
Within the HTML, create the prompt. (See HTML)
After clicking the submit button, whatever text is in a textbox must be assigned a variable
This is done in javascript file:
*/
//First, define the variable to store the input in, without assigning it
let username;
//Fetch the document element myButton, when pressed(onclick) execute function:
document.getElementById("myButton").onclick = function(){
    //When the button is clicked, take whatever value(text) is in myText, and assign it to username
    username = document.getElementById("myText").value;
    //Then print the input in console
    console.log(username)
    //And maybe even itterate the label
    //fetch the element called myLabel, then change the HTML with innerHTML to whatever username is.
    document.getElementById("myLabel").innerHTML = "hello" + username;
    //This shows that js can be used to actually EDIT the HTML content.

}
