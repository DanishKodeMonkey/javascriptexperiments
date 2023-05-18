//array.reduce() reduces an array to a single value
//useful for summing up the values of an array

//example could be summing up the value of a purchase

//First, a array of prices
let prices = [5, 10, 15, 20, 25];

//Then an array, that will check the prices array, and reduce all values inside using the checkOut callback function
let total = prices.reduce(checkOut);

//Print result to console
console.log(`the total price is: $${total}`);

//the callback function, using 2 elements, the total, which is the array we reduce to, and element, whatever array we input(in this case prices)
function checkOut(total, element){
    //we add each value in the element(prices) to the total array.
    return total + element;
}