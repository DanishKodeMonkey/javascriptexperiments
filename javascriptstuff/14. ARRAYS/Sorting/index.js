//sorting an array of strings can be done as follows:

//we have an array here with 4 fruits, unsorted.
let fruits = ["banana","apple","orange","mango"];

//There is a built in sorter for arrays called sort.
//This will sort the array alphabetically.
//to do this in reverse, add the reverse method
fruits = fruits.sort().reverse();

//For each fruit of fruits, display fruit.
for(let fruit of fruits){
    console.log(fruit);
}