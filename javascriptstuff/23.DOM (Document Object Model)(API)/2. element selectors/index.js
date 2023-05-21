//Various methods of selecting/editing elements from HTML in javascript

//==================
//fetch element id "myTitle" from document, assign variable element
//==================
let element = document.getElementById("myTitle")
element.style.backgroundColor = "lightgreen";

//==================
//fetch elementS by NAME(group of elements by name), assign variable fruits
//==================
let fruits = document.getElementsByName("fruits");


//cycle through elements, and see which element is checked
fruits.forEach(fruit => {
    if (fruit.checked){
        console.log(fruit.value);
    }
})
//print element index from group name fruits to console
console.log(fruits[1])

//==================
//Fetch elements by TAG name (<li> <h1> <br> <h5> <href> etc.)
//==================
let vegetables = document.getElementsByTagName("li");
//Returns as a collection, similarly to an array, so can call return by index
vegetables[2].style.backgroundColor = "lightgreen";

//==================
//Fetch elements by CLASS
//==================

let desserts = document.getElementsByClassName("desserts")
//Returns as a collection, similarly to an array, so can call return by index
desserts[0].style.backgroundColor = "blue";

//==================
// Query selector - selects only first element of a query
//==================
//Query selector can fetch most any type of element(id, class, etc)
//if you fetch by id, make sure to precede with #
let elementId = document.querySelector("#myTitle");
elementId.style.backgroundColor="pink"
//fetch by class, make sure to precede with .
let elementClass = document.querySelector(".desserts");
elementClass.style.backgroundColor="pink"
//fetch by tag name (no precedes)
let elementTag = document.querySelector("li");
elementTag.style.backgroundColor="pink";
//fetch by attribute (for, id, href, a)
let elementAttribute = document.querySelector("[for]");
elementAttribute.style.backgroundColor="lightred";

//==================
// Query selector all - selects all elements of a query
//==================
//querySelectorAll selects all elements of a query
//same rules apply, but must apply changes in itterations

let elements = document.querySelectorAll(".desserts");
elements.forEach(element => {
    element.style.backgroundColor = "yellow"
})
