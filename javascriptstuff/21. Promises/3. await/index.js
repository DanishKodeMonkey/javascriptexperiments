//await makes an async function wait for a promise
//Again, taking the code from the last part:

async function loadFile(){
    let fileLoaded = true;

    if(fileLoaded){
        return "file loaded"
    }
    else{
        throw "File NOT loaded"
    }
};

//Another way of writing the then/catch code, is with a await keyword:
//Keep in mind await must be placed within a async function.
async function startProcess(){
    //Since this is dangerous code(potential to not work(file not loaded))
    //we will set a try block to catch the errors and display them.
    try{    
        //We store the result of await in a tempoairy variable message
        let message = await loadFile();
        //and print.
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}
startProcess();
