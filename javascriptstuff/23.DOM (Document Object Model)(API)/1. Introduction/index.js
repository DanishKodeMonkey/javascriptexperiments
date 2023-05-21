/**
 * DOM =    Document Object Model(API(Application Programming Interface))
 *          An interface for changing the content of a page
 *          Ordered in a hierachial tree(DOM hireachy PNG)
 *          is a representation of a HTML document
 * 
 */

//We can access and paste various parts of a document to console
//with a few commands, calling to the document

console.log(document); //will display the DOM, and everything within it, in a tree format
console.dir(document); //will display all the properties of a DOM
console.log(document.title); //Will fetch a specific datapoint from the DOM(this case, title)
console.log(document.URL); //Will just like title, display the URL

//knowing this, we can also edit these properties

document.title = "Title goes here!" //changes the tab title
//document.location = "http://www.google.com" //changes the adress to google
document.body.style.backgroundColor = "skyblue"; //ACTUALLY CHANGES CSS PROPERTIES OF THE HTML!

//Gets a element from the HTML by its given id, innerHTML, edits the element.
document.getElementById("myDiv").innerHTML = "Hello"

