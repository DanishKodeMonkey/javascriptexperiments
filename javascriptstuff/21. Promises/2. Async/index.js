/**async makes a function return a promise
We will re-use the code from the basic part of the experiment, this time
we will precede it all in a async function this time.
*/
async function loadFile(){
    let fileLoaded = true;

    if(fileLoaded){
        return "file loaded"
    }
    else{
        throw "File NOT loaded"
    }
};

//Another way to read this would be, with alot more syntax:
/*function loadFile(){
    let fileLoaded = true;

    if(fileLoaded){
        return Promise.resolve("file loaded")
    }
    else{
        return Promise.reject("File NOT loaded")
    }
};
*/
loadFile.then(value => console.log(value))
        .catch(error => console.log(error));