/*
A switch is a statement that examines 
a match against many case clauses.
It is more effecient than using many else if statements.
*/


//in this example, instead of using if, and else if statement for each of these points,
//we use a switch case 

//Naturally, we wanna check a variable called grade, it has a value of A
let grade = "A";

//We start a switch here, and tell it to check variable A
switch(grade){
    //If grade has a value of A, 
    case "A":
        //do this
        console.log("Great job!");
        //and end the code
        break;
    //if grade has a value of B,
    case "B":
        //do this
        console.log("Great job!");
        //and end the code
        break;
    //etc etc etc
    case "C":
        console.log("Great job!");
        break;
    case "D":
        console.log("Great job!");
        break;
    case "F":
        console.log("Great job!");
        break;
    //Use default, for cases where none of the above apply, like if we wrote coffee instead of a letter grade.
    default:
        console.log(grade, "Not a letter grade!");
}

//Another way to use them is by checking for a true statement in the case
//like if we want to see if a score is above a certain level

let score = 95;

//We start a switch here, and tell it to check if the following if any of the below is true
switch(true){
    //If grade has a value of A, 
    case score >= 90:
        //do this
        console.log("Great job!");
        //and end the code
        break;
    //if grade has a value of B,
    case score >= 80:
        //do this
        console.log("Good pass!");
        //and end the code
        break;
    //etc etc etc
    case score >= 70:
        console.log("Nice pass!");
        break;
    case score >= 60:
        console.log("Barely passed");
        break;
    case score < 60:
        console.log("You fail!");
        break;
    //Use default, for cases where none of the above apply, like if we wrote coffee instead of a letter grade.
    default:
        console.log(grade, "Not a number score!");
}