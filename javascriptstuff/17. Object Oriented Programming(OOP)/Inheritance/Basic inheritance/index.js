// inheritance = a child class can inherit all methods
//and properties of another class.¨

//Child classes inherit using childClass extends Parentclass


/* Ew, repeating code

//Say we have a rabbit, this is now a class
class Rabbit{
    //Properties, a rabbit is alive, and its called a rabbit
    alive = true;
    name = "rabbit";

    //Methods, it can eat, sleep and run.
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
    run(){
        console.log(`This ${this.name} is running`);
    }
}

//And we also have a fish, this is now a class
class Fish{
    //Properties, a fish is alive, and its called a fish
    alive = true;
    name = "fish";

    //Methods, it can eat, sleep but it can't run...duh..
    //Instead, it swims.
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

//Again, with a hawk
class Hawk{
    //Properties, a fish is alive, and its called a fish
    alive = true;
    name = "hawk";

    //Methods, it can eat, sleep and flies.
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}
*/

//nice, 3 classes. But we have broken a tennet of programmers.
//We have repeated ALOT of code with this.... lets optimise. 
//WITH INHERITENCE!

//So lets create a parent class.
//Creating a parent class is exactly like a child class, 
//but notice each child class now EXTENDS the animal class
//inside the parent class we will place all the code that 
//the child classes have in common.


class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

//Say we have a rabbit, this is now a class
class Rabbit extends Animal{
    //Properties, a rabbit is alive, and its called a rabbit
    
    name = "rabbit";

    //Methods, it can eat, sleep and run.
    
    run(){
        console.log(`This ${this.name} is running`);
    }
}

//And we also have a fish, this is now a class
class Fish extends Animal{
    //Properties, a fish is alive, and its called a fish
    name = "fish";

    //Methods, it can eat, sleep but it can't run...duh..
    //Instead, it swims.
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

//Again, with a hawk
class Hawk extends Animal{
    //Properties, a fish is alive, and its called a fish
    name = "hawk";

    //Methods, it can eat, sleep and flies.
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

//Would you look at that! Nothing repeats now! 

//Only the properties and methods that are UNIQUE to the child classes 
//are defined


//And if we create some objects:
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

//And call the parent class properties!
console.log(rabbit.alive);
hawk.eat();
fish.sleep();
rabbit.run();
