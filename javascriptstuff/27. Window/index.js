/**
 * The window is an interface, used to talk to the web browser
 * The DOM is a property of the window.
 */

console.dir(window);//Print the window object, to console, see what can be tampered with

//here are a few:
//Width and height of the winddows content(inner)
console.log(window.innerWidth);
console.log(window.innerHeight);

//width and height of the windows border(tabs and all)
console.log(window.outerWidth);
console.log(window.outerHeight);

//Location of the scrool wheel X and Y
console.log(window.scrollX)
console.log(window.scrollY)

//Look up the window href location
console.log(window.location.href);
//will forward you to google
//window.location.href = "https://google.com";

console.log(window.location.hostname);
console.log(window.location.pathname);

//Here are a few useful methods as well, to use with a button

const myButton = document.querySelector("#myButton");
myButton.addEventListener("click",() => window.open());

//Some different alerts
window.confirm("Press OK to continue!");
window.alert("Alert!")

let age = window.prompt("Enter your age");
if(age < 18)
    window.alert("You must be 18+ to visit this site!")
    window.close()