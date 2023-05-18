
let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort);

grades.forEach(print);

//Here is the descendingSort function, it takes two values
function descendingSort(x, y){
    //and compares them
    return y - x;
}
//Here is the ascendingSort function, it takes two values at a time
function ascendingSort(x, y){
    //and compares them
    return x - y;
}

function print(element){
    console.log(element);
}