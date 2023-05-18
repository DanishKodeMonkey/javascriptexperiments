// this is used to refer to a particular object
//the object depends on the immediate context.

//Using the object from earlier:

//car 1
const car1 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        //If we were to call the car ${model} here
        console.log(`You drive the ${this.model}`)
        //It wont work, you have to use {this.model} to do so in an object. 
        //the immediate context is then car 1.
        //You could just as well has written car1.model, but this is more contextual.
    },
    brake : function(){
        console.log("You step on the brakes")
    }
}

//car 2
const car2 = {
    model:"Corvette",
    color:"blue",
    year:2020,

    drive : function(){
        console.log(`You drive the ${this.model}`)
    },
    brake : function(){
        console.log("You step on the brakes")
    }
}

car1.drive()
car2.drive()

//Should you print this to console without any context, it will refer to the window of the browser.