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
setCookie("email", "sponge@gmail.com", 365)
console.log(document.cookie);

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)
    let expires = "expires="+date.toUTCString();
    document.cookie = `"${name};${expires}; path=/`
}

