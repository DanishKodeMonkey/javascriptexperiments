/**
 * SetTimeout() Invokes a function after a number of milliseconds
 * it is a asynchronous function (doesn't pause execution)
 */

let item = "Crypto"
let price = 420.69

//Syntax as follows
let timer1 = setTimeout(firstMessage, 3000);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(){
    alert(`Buy this ${item} for ${price}`);
}
function secondMessage(){
    alert(`This aint no scam!`);
}
function thirdMessage(){
    alert(`DOD IT!`);
}

//You can cancel a given setTimeout with clearTimeout()
document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("THanks for BuYinNG!")
}