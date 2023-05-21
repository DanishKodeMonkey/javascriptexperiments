//Many HTML elements have some king of event attribute. 
//That, when triggered executes an event.

/* EXAMPLE 1, onclick
//in this example, we made a button, that will trigger a event, once pressed
//this attribute is called onclick.

function doSomething(){
    alert("You did something!")
}
*/

//Example 2, callback.
//same function, but we assign the button to a variable, and invoke the function through
//the variables onclick attribute
const button = document.getElementById("myButton");
button.onclick = doSomething



//another event to trigger will be onload, used to trigger an event when the page load

const body = document.body;
body.onload = doSomething;
//This can also be set directly in the body tag of the HTML file <body onload = "doSomething">

//next is the onChange attribute
//onchange triggers when a change occours.
const input = document.getElementById("myText")
input.onchange = doSomething;

//You can also trigger events on various mosue events
const divider = document.getElementById("myDiv")
divider.onmouseover = changeColor;
divider.onmouseout = changeBack;
divider.onmousedown = changeBack;
divider.onmouseup = changeColor;

function doSomething(){
    alert("You did something!")
}

function changeColor(){
    divider.style.backgroundColor = "red";
}
function changeBack(){
    divider.style.backgroundColor = "lightgreen";
}