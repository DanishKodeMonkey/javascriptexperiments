//loops can be used to process data within a array
//First we create an array, with data
let prices = [5,10,15,20];

//for each itteration of this loop, starting at 0, if i is less than prices.length, increment by 1.
for(let i = 0; i < prices.length; i+=1){
    //display price index itteration
    console.log(prices[i]);
}

//The same can be done in reverse by moving elements around a bit
//for each itteration, starting at prices.length-1, if i is bigger than 0, itterate by -1
for(let i = prices.length - 1; i >=0; i-=1){
    console.log(prices[i]);
}

//An additional option is a for of statement
//for each itteration of price, of array prices, display price.
for(let price of prices){
    console.log(price);
}