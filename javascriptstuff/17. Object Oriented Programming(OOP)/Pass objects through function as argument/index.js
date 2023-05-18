

class Car{

    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color; 
    }
}
const car1 = new Car("Mustang", 2023, "red",);
const car2 = new Car("Corvette", 2024, "blue",);
const car3 = new Car("Lambo", 2022, "yellow",);

//For this example, we need to pass this object through a function, 
//to get the information of each car.

//invoke the displayInfo function, with any of the cars. Get its info.
displayInfo(car2);

//so a function called displayInfo, with a matching parameter, car.
function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);

}

//Invoke it!
changeColor(car1, white);
displayInfo(car1);
//Lets make a color change function

//So when we invoke changeColor, we need 2 arguments, a car, and a color.
function changeColor(car, color){
    //function will then change car.color to whatever is set.
    car.color = color
}