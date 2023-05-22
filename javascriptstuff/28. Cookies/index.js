/**
 * Cookie is a small text file stored on your computer
 * it is used to remember information about the user
 * it is saved in name=value pairs
 */
//check if cookies are even enabled
console.log(navigator.cookieEnabled);
/* Manually creating a cookie
//To add a cookie, type the cookies name=value, and optionally an expiration date.
document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
//Again, with lastName, but this one expired in year 2000, so is deleted.
document.cookie = "lastName=Squarepants; expires=Sun, 1 January 2000 12:00:00 UTC; path=/";

//list teh cookies, it is an object.
console.log(document.cookie)
*/ 

//Automating cookie creation:
//We invoke the setCookie function here, and follow the format of the arguments

//a quick print to see if it worked

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn")
const cookieBtn = document.querySelector("#cookieBtn")

submitBtn.addEventListener("click", () =>{
    setCookie("firstName", firstText.value, 365)
    setCookie("lastName", lastText.value, 365)
})
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
})

//And here is the function, 3 arguments, and when invoked:
function setCookie(name, value, daysToLive){
    //create variable called date, fetch todays date as object and assign to date
    const date = new Date();
    //Set the time of the date, date.getTime returns time in ms, then add daystolive, as input, and convert to ms.(24 hours, 60 minutes, 60 seconds, times 1000ms)
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)
    //Convert the ms to a utcstring with date.toUTCstring, and assign to variable expires.
    let expires = "expires=" + date.toUTCString();
    //now assign the cookie, with our values, in teh format from before.
    document.cookie = `${name}=${value}; ${expires}; samesite=lax; path=/`;
}
//Function deleteCookie will allow us to invoke a manual deletion of any cookie
function deleteCookie(name){
    //by simply setting the values associated with a name to null (expiration date set to nothing = delete)
    setCookie(name,null,null);
}

//This function will get a cookie by name
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}
