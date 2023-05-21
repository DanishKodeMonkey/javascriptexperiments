// add/change HTML elements
//two ways to add text to an element
//  .innerHTML (vulnerable to XSS attacks)
//  .textContent(more secure)


//create a HTML element, type h1, assign to variable nameTag
const nameTag = document.createElement("h1");

//Edit the nameTag element, with input prompt(WARNING, VULNERABLE TO ATTACKS)
//nameTag.innerHTML = window.prompt("Enter your name");

//The safe way: Edit the nameTag element with textcontent, with input prompt
nameTag.textContent = window.prompt("Enter your name");
//append the body of the document, add nameTag.
document.body.append(nameTag);

//lets add an item to the fruit list
//select the fruitlist, assign to variable myList
const myList = document.querySelector("#fruit");
//create new Element "li", assign to listItem
const listItem = document.createElement("li");
//edit listItem text, with mango
listItem.textContent = "mango";
//append myList, with listItem (or, to add to start of list, prepend.)
myList.append(listItem);
//to add an item to the middle of a list, is a bit more complex.
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);