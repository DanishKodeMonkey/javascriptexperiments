/*
The for loop repeats some code a certain amount of times
    There are some similarities between for and while loops
    but there are some discrepancies
    You tend to use a for loop for a limited amount of times
    and a while loop a potentially limitless amount of times.
*/

//You can use the for loop to count for instance.
//using ; to seperate each statement, we:
//define a variable, called counter, starting at 1.
    //we check if counter is <=10
        //we then increment counter by 1. And repeat
    //once the counter reaches 10, we exit the loop.
for(let counter = 1; counter <=10; counter+=1){
    console.log(counter);
}

//A common throwaway convention to using for loops or while loops is to just call the variable i(itteration)