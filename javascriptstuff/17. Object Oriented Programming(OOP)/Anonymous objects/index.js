/*
An anonymous object is a object without a name
It is not directly referenced
has less syntax, and no need for unique names
Downside is that we dont have direct access to such an object.
*/

//For this example we will use cards, each card will be an object, created with a class

class Card{
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
    }
}
//Instead of defining every single card like so, and assigning them
//to a variable, only to then call them in a array
//and finally in a log...
/*
let card1 = new Card("A", "Hearts")
let card2 = new Card("2", "Spades")
let card3 = new Card("Q", "Diamonds")
let card4 = new Card("3", "Hearts")
let card5 = new Card("J", "Spades")
let card6 = new Card("K", "Diamonds")

let cards = [card1, card2, card3, card4, card5, card6]

console.log(cards[0].value + cards[0].suit)
*/

//instead, we will use anonymous objects to create them in-line of the array
//downside being lack of access, since we have no variable to invoke anymore.

let cards = [new Card("A", "Hearts"), 
            new Card("2", "Spades"), 
            new Card("Q", "Diamonds"), 
            new Card("3", "Hearts"), 
            new Card("J", "Spades"), 
            new Card("K", "Diamonds")]

// in order to access these anonymous objects, we will need to do so indirectly.
//this is done through the index of the array.

console.log(cards[0].value + cards[0].suit)

//Less syntax, in exchange for less access essentially.
