
//An array of objects, is as it sounds. An array of constructed objects.

//useful for organising a group of objects.

class Car{

    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color; 
    }
    drive(){
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car("Mustang", 2023, "red",);
const car2 = new Car("Corvette", 2024, "blue",);
const car3 = new Car("Lambo", 2022, "yellow",);

//We have 3 cars, lets throw them into an array!

const cars = [car1, car2, car3]

//To access properties of a array of objects, use the array name,
//the index of the object you want from the array
//and the property you want to access behind a dot .
console.log(cars[0].model);
console.log(cars[1].year);
console.log(cars[2].color);

//Same goes for methods.
cars[0].drive();

//BONUS! Lets have a function go over the array of cars

//set a function called startRace, that accepts the array of cars
function startRace(cars){
    //for the constant car of cars array
    for(const car of cars){
        //invoke drive of each car.
        car.drive();
    }
}