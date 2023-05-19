/**
 * The date object is used to work with dates and times
 */

//Creates a Date object with current date and time on machine, assigns to date
let date = new Date();
//if you call Date with argument of 0 you will get the Epoch
let epoch = new Date(0)
//you can also put in any amount of milliseconds
let future = new Date(10000000000)
//or a specific day in different arguments Date(year, month, day, hour, minute, second, millisecond)
let someTime = new Date(2023, 0, 1, 2, 3, 4, 5);
//or in string format:
let someTime2 = new Date("January 1, 2023 00:00:00");

//You can also fetch specific parts of a date from a date object
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let month = date.getMonth();
let dayOfWeek = date.getDay();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();
// etc

//you can also SET properties

date.setFullYear(2024);
date.setMonth(11);
//etc, same format as above

//Convert date to LocaleString format
date = date.toLocaleString();

//print date to console
console.log(date);

//You can also create custom functions to format a date and time

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    return `${month}/${day}/${year}`
}

function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    //Add am/PM type, is hours bigger than 12? if so pm, if not, am.
    let amOrPM = hours >= 12 ? "pm" : "am";
    //Convert to traditional time
    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${amOrPM}`
}

