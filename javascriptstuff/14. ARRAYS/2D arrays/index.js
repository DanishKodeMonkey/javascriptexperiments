// a 2D array is a array of arrays

//First we create 3 seperate arrays
let fruit = ["apples", "oranges","bananas"]
let vegetables = ["carrots","onions","potatoes"];
let meats = ["eggs", "chicken", "fish"];

//Then we assemble them in a 2D array.
let groceryList = [fruit, vegetables, meats];

//to itterate over a 2D array, use nested loops

//outer loop will manage the 2D array
//inner loop will manage each individual array

//To change the indexes of a 2D array, keep in mind they have two indencies
//picture this as the arrays lining up in a grid. So first index is a grid, second collumn
groceryList[0][0] = "mangos"; //would be apples -> mangos
groceryList[2][2] = "steak"; //would be first -> steak (because computers count from 0)

//For each list of groceryList, assign each a list
for(let list of groceryList){
    //for each food in each list
    for(let food of list){
        //display each item of each list
        console.log(food);
    }
        
}
