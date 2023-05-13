/*
Break = breaks out of a loop entirely
continue = skip an iteration of a loop
*/
//Like before, we make a counter towards 20.
for (let i = 1; i <= 20; i +=1){
    //this time we check if i == 13 however
    if(i == 13){
        //if it is, we continue, or skip the itteration.
        //or if we were really scared of 13, we could break, and terminate the loop entirely.
        continue;
    }
    console.log(i);
}