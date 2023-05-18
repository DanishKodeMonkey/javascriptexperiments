/*
OBJECTS:
Object = a group of properties and methods
        properties = what an object has
        methods = what an object can do
        use . to access properties/methods
*/

//To create a object, define a variable, and assign properties and methods
//inside curly braces {}
const car1 = {
    //Properties are defined as such
    //effectively associating the object with properties
    //"What does the object have?"
    model:"Mustang",
    color:"red",
    year:2023,

    //Methods are defined as such
    //effectively functions that can be executed.
    //"What can the object do?"
    //seperate functions with commas ,
    drive : function(){
        console.log("You drive the car")
    },
    brake : function(){
        console.log("You step on the brakes")
    }
}

//Lets create another car object while were at it
const car2 = {
    //Properties are defined as such
    //effectively associating the object with properties
    //"What does the object have?"
    model:"Corvette",
    color:"blue",
    year:2020,

    //Methods are defined as such
    //effectively functions that can be executed.
    //"What can the object do?"
    //seperate functions by commas ,
    drive : function(){
        console.log("You drive the car")
    },
    brake : function(){
        console.log("You step on the brakes")
    }
}

//To access an objects properties and methods, follow the object name with a .
//And either print to console, assign it, or do whatever you need with it.
console.log(car1.model);
console.log(car1.color);

//to access car2.
console.log(car2.model);

//to invoke a objects methods, do the same.
car1.drive();
car1.brake();
//to invoke car 2 method
car2.brake();