/**
 * setInterval() invokes a function repeatedly after a number of milliseconds
 * it is an asynchronous function (doesn't pause execution)
 */


//Make a counter starting at 0
let count = 0;
//prompt the user for a number, assign to max
let max = window.prompt("Count up to what number?");
//Make sure max is a number
max = Number(max);

//Now we set interval
//you can invoke callbacks, function expressions, error functions etc.
//This time we will jsut callback
const myTimer = setInterval(countUp, 1000);

//And our callback function
function countUp(){
    //Increment count by 1
    count += 1;
    //type new count in console
    console.log(count);
    //if count is bigger than or equal to max
    if(count >= max){
        //clear interval, needs id of setInterval, so myTimer
        clearInterval(myTimer);
    }
}