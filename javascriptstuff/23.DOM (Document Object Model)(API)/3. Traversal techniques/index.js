
//Fetch document.body, assign to element
let element = document.querySelector("#vegetables");
//from element(document.body) fetch firstElementChild, assign to child
let parent = element.parentElement;
//style child(firstElementChild<-element<-document.body) with lightgreen background color
parent.style.backgroundColor = "lightgreen";
    let siblingNext = element.nextElementSibling;
        siblingNext.style.backgroundColor = "blue";
    let siblingPrevious = element.previousElementSibling;
        siblingPrevious.style.backgroundColor = "Yellow"

//style child of child, fruit
let elementFruit = document.querySelector("#fruit");
    let firstFruitChild = elementFruit.firstElementChild;
        firstFruitChild.style.backgroundColor = "lightblue"

    let lastFruitChild = elementFruit.lastElementChild;
        lastFruitChild.style.backgroundColor = "pink"
    let indexFruitChild = elementFruit.children[1];
        indexFruitChild.style.backgroundColor = "orange"

//Returns collection, must be put into array
let elementDessert = document.querySelector("#dessert");
let childArray = Array.from(elementDessert.children);
childArray.forEach(childArray => childArray.style.backgroundColor = "purple")

/**
 * .firstElementChild
 * .lastElementChild
 * .parentElement
 * .nextElementSibling
 * .previousElementSibling
 * .childre[]
 * Array.from(.children)
 */