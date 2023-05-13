//nested loops are just a loop, within a loop!
//The way to read a nested loop is as follows
//Once the nested loop j, has finished counting to 3, that counts as 1 itteration in the original loop i,
//and it starts again.
//as a result, we would count to 3(j)... 3 times(i)
//common naming convention btw, j instead of i in nested loops because... well j is after i on the keyboard.

/*
for(let i = 1; i <= 3; i+=1){
    for(let j = 1; j <= 3; j+=1){
        console.log(j);
    }
}
*/
//a useful thing to use nested loops for, is for generating rows and columns.
//the outer loop will handle rows
//the inner loop will handle collumns.

//Define 3 variables that will hold a user input
let symbol = window.prompt("Enter a symbol: ")
let rows = window.prompt("Enter # of rows")
let collumns = window.prompt("Enter # of collumns")

//Then we create a nested loop
//outer loop will handle rows,
//start at 1, and as long as i is <= user input rows, increment by 1.
//This will be done ONCE for every FULL ITTERATION CYCLE of the INNER loop

for(let i = 1; i <= rows; i+=1){
    //same here, but this cycle will repeat 3 times, for everyone 1 cycle of the outer loop.
    for(let j = 1; j <=collumns; j+=1){
        //This is what happens every itteration of the inner loop, itterate myRectangle by j
        document.getElementById("myRectangle").innterHTML += j;
    }
    //This is what happens every itteration of the outer loop, itterate myrectangle by i
    document.getElementById("myRectangle").innterHTML += i;
}

//so say user inputs 3 rows and 4 collumns
// 1 row will be created, then 4 collumns will be written
//then 1 row will be created, another 4 collumns will be written
//then 1 row will be created, another 4 collumns will be written
