/*
Logical operators
    gives us the ability to check more than 1 condition concurrently
    && AND( BOTH conditions must be true )
    || OR (Either condition can be true)
    ! the NOT logical operator is typically used to reverse a conditions boolean value
        true -> false false -> true
*/

//An example of a useful case for this

//=============================
//===== The AND operator ======
//=============================

let temp1 = 15;
//the AND && logical operator is great for checking a range of values for instance.
if(temp1 > 0 && temp1 < 30){
    console.log("The weather is nice!")
}
else{
    console.log('The weather is shitty...')
}
//A way to read a AND operator is: "If this value is x AND y, then:"

//=============================
//===== The OR operator =======
//=============================

//the OR || logical operator is great to check if something falls OUTSIDE a range

let temp2 = 50;

if(temp2 <=0 || temp2 >=30){
    console.log('the weather is good!');
}
else{
    console.log('the weather is bad :(');
}
//A way to read a OR operator is:"If this value is x OR y, then:"

//=============================
//==== AND && operator 2 ======
//=============================

//Lets do it agian, but with a sunny variable in bool!

let temp3 = 15;
let sunny = True;

//the AND && logical operator is great for checking a range of values for instance.
//You can check any number of values at the same time, just keep in mind
//they must all pass in order for the if statement to return true.

//Also remember, when checking bools in a if statement, you dont have to write == true
if(temp3 > 0 && temp3 < 30 && sunny){
    console.log("The weather is nice!")
}
else{
    console.log('The weather is shitty...')
}
//A way to read a AND operator is: "If this value is x AND y AAAND Z, then:"

//=============================
//=====The NOT ! operator======
//=============================

let temp4 = 15;
//The NOT ! operator is usually placed before a paranthesis covered condition.
//The way to read it would be:
//If temp4 is NOT above 0, then:
if(!(temp4 > 0)){
    console.log("It's cold outside!");
}
else{
    console.log("It's warm outside!");
}

if(!sunny){
    console.log("It's cloudy outside!");
}
else{
    console.log("It's sunny outside!");
}

