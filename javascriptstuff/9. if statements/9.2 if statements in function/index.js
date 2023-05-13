//For this example, we create a checkbox, and a button, and would like to check if the checkbox is checked when
//the button is pressed.
//For this, we will need to use the HTML doc as well.
//As for the javascript portion:

//one way of writing it, more litterally would be like so:
/*
document.getElementById("myButton").onclick = function(){
    if(document.getElementById("myCheckBox").checked == True){
        console.log("Very good! Coffee is good! WOOOO!")
    }
    else{
        console.log("but...coffee? :(");
    }
}
*/

//Another, more good looking way to do this, would be to store the function condition in a variable.

document.getElementById("myButton").onclick = function(){
    //Here we store the elementid in a variable...
    const myCheckBox = document.getElementById("myCheckBox")

    //...and call it here, as checked.
    if(myCheckBox.checked/*== True */){
        console.log("Very good! Coffee is good! WOOOO!")
    }
    else{
        console.log("but...coffee? :(");
    }
}
//LEVEL 2! RADIO BUTTONS!

//Lets store the status of the radio buttons from the html dom in variables again.

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = documen.getElementById("visaBtn");
const mastercardBtn = documen.getElementById("mastercardBtn");
const paypalBtn = documen.getElementById("paypalBtn");
const dankortBtn = documen.getElementById("dankortBtn");

//Now we use a if statement to check which of the above is true.
if (visaBtn.checked){
    console.log("You are using visa");
}
else if (mastercardBtn.checked){
    console.log("You are paying with mastercard");
}
else if (paypalBtn.checked){
    console.log("You are paying with paypal");
}
else if (dankortBtn.checked){
    console.log("You are paying with dankort");
}
else{
    console.log("please select a payment type!")
}
