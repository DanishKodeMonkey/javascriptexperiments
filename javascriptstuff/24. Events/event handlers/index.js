/*
.addEventListener(event, function, useCapture)
you can add many event handlers to one element.
event the same event that invokes different functions.
*/

//as usual, fetch a element, and assign it to a variable
const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");
//the element was also assigned some style via CSS to begin

//the addeventListener can be stacked to watch for several different events
//and act accordingly.
innerDiv.addEventListener("click", changeBlue);
//The third argument, useCapture, gives priority if two elements are ontop of each other.
outerDiv.addEventListener("click", changeBlue, true);

function changeBlue(){
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "lightblue";
}

