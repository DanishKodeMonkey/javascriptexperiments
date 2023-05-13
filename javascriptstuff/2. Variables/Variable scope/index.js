//variable scope is where the variable is accessible

// let(tuce) = variables are limited to block scope {}
// var(iable) = variables are limited to a function(){}

// global variable = is declared outside any function
// If global, a var will CHANGE a browsers window properties.
//So be careful about using global vars!
//Instead, use constants or lettuces in global. and vars in functions.

var name = "Kode";

doSomething()

function doSomething(){
    for(var i = 1; i <=3; i+=1){
        //If let was used, we would only be able to call reference to i in here
        //console.log(i);
    }
}

//since its a var, we can call reference to i outside the function
console.log(i);