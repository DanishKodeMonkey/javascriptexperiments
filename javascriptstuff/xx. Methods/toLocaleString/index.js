/*
toLocaleString() = returns a string with a language
                    sensitive representation of this number

Syntax
number.toLocaleString(locale, {options});

'locale' = specify that language (undefined defaults to browser language)
'options' = objects with formatting options

*/

//examples:
//define a number
let myNum = 123456.789;
//format numbers to different languages
myNum = myNum.toLocaleString("en-US"); //American english
myNum = myNum.toLocaleString("hi-IN"); // Hindi
myNum = myNum.toLocaleString("de-DE"); //standard german

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"}); //converts number to various currencies
myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

myNum = myNum.toLocaleString(undefined, {style: "percent"}): //converts number to percent

myNum = myNum.toLocaleString("undefined", {style: "unit", unit: "celcius"}); //convert number to unit, like celcius, kilometers, kelvin, etc.


console.log(myNum);