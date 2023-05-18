// super = refers to the parent class.
// commonly used to invoke the constructor of a parent class

//Returning to the problem from before, we have a parent class, animal
//and child classes of different animals, rabbit, fish, and hawk
//We dont want to repeat code. So we invoke the constructor of a parent class
//using super.
//And keep the unique properties in each race
class Animal{
    //parent class constructor, with properties that goes for each animal below
    constructor(name, age){
    this.name = name;
    this.age = age;
    }
}

class Rabbit extends Animal{
    //Then invoke the parent super constructor
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}


class Fish extends Animal{
        //Then invoke the parent super constructor
        constructor(name, age, swimSpeed){
            super(name, age);
            this.swimSpeed = swimSpeed;
        }
}


class Hawk extends Animal{
        //Then invoke the parent super constructor
        constructor(name, age, flySpeed){
            super(name, age);
            this.flySpeed = flySpeed;
        }
}

//Create some objects
const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200)

//Check results
console.log(hawk.name);
console.log(fish.swimSpeed);
console.log(rabit.age);
