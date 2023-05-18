// class =  a blueprint for creating objects
//           define what properties and methods they have
//          use a constructor for unique properties.

//For this example we create a class without a constructor.

//Creating a class is similar to creating an object
//first, create teh class Player, inside curlies, set properties and methods.
class Player{
    //properties
    score = 0;

    //methods
    //notice how you dont need to call the function, just type it out.
    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}

//Now we have create a class blueprint, lets create a object using this class

//Like we did with the cars, name the object, but this time, invoke the Player class.
const player1 = new Player();
const player2 = new Player();

//Now we can adjust the properties, or run its methods
player1.score +=1;

//We can also check the properties of player1.
console.log(player1.score);
console.log(player2.score);
player1.pause();
player1.exit();
player2.exit();