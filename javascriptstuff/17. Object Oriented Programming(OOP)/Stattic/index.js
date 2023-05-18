/*
A static belongs to the class, not the objects.
Properties: Useful for caches, fixed-configuration.
Methods: Useful for utility functions
*/

//Example, back to cars
//lets say we create 3 cars, but we want to keep track of how many cars
//have been created, we can use a static for this.

class Car{
    //Here, we create a variable starting at 0.
    numberOfCars = 0;
    constructor(model){
        this.model = model;
        //After creating a car using constructor, 
        //increment numberOfCars variable from Car class, by 1.
        Car.numberOfCars += 1;
    }
    //This also goes for Methods, this prevents any of the constructed cars 
    //from invoking the startRace method. 
    //To make a static, precede with static.
    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1= new Car("Mustang");
const car2= new Car("Ford");
const car3= new Car("Toyota");

//To then access a static inside a class, call the class, and the static.
console.log(Car.numberOfCars);

//And to invoke the startRace method, we invoke through the class.
Car.startRace();