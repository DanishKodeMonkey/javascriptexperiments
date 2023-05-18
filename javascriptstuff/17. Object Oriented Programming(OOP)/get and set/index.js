// get binds an object property to a function
// when that property is accessed.
//Benefits include added data security, and the ability to add additional logic to a constructor.

//Set = binds an object property to a function
// when that property is a ssigned a value.

//We can use a getter to add on a unit of measurement to power
//after the constructor is done, inside the class.
// you "get" the property to add additional properties.
class Car{
    constructor(power){
    //common naming convention says to precede a property of a getter
    //with _, this will let programmers know not to mess with it lightly
        this._gas = 25;
        this._power = power;
        
    }
    //get power
    //the property name and the getter cannot have the same name
    get power(){
        //by invoking the protecting property, it is effectively read-only
        //and not writable
        //return this._power;
        //But instead of that, lets add some logic:
        return `${this._power}hp`;
        //Now power will be extended with hp. BOOM
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
    //getters should be considered not to be messed with, by users and programmers.

    //Now SETTERS encourage people to set its value, this could be useful for gas.
    //make a setter to gas, with argument value
    set gas(value){
        //if value is set above 50
        if(value > 50)
            //adjust to 50(to limit it)
            value = 50;
        //else, if value is below 0
        else if(value < 0){
            //adjust to 0 (to I dunno, not have less than 0?)
            value = 0;
        }
        //and set _gas to whatever value the setter gets.
        this._gas = value;
    }
}

let car = new Car(400);

//then we invoke the setter.
//and even if we set it to like 10k, it will only go to 50.
car.gas = 10000
console.log(car.power)