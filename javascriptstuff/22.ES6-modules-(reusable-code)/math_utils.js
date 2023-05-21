

/*
SO! 
Below we have some math stuff ready to use! some functions to use elsewhere.
To export functions of a module, we use export!
*/

export const PI = 3.14159;

export function getCircumference(radius){
    return 2 * PI * radius;
}
export function getArea(radius){
    return PI * radius * radius
}