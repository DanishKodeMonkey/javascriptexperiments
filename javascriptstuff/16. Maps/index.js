// Map = object that holds key-value pairs of any data type
//Used to associate keys with values for instance.
//Syntax: new Map([[Key1, Value1],[key2, value2],[etc1, etc2]])

//Create a constant variable called store
    //inside store we create a new Map
const store = new Map([
    ["t-shirt", 20],
    ["Jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);
//We now have a map of items, and their price

//Now lets create a shoppingCart, starting at 0(value)
let shoppingCart = 0;

//lets add the value of t-shirt, 
//by using the map name store, with function get with key t-shirt
//This fetches the value from t-shirt, and adds it to shoppingCart
shoppingCart += store.get("t-shirt");

//same here
shoppingCart += store.get("underwear");

//print final price to console
console.log(shoppingCart);

//To add an item to a map, use the map.set(key,value) function
store.set("hat", 40);

//to delete an item, use map.delete(key);
store.delete("hat");

//to search for a key, use map.has(key);, print immediately with console.log since it prints bool
console.log(store.has("hat"));

//Check the size of a map(amount of pairs) using map.size
store.size();

//use a forEach function, to print each key, and their value to console.
store.forEach((value, key) => console.log(`${key} $${value}`));