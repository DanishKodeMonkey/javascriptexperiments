/**
 * The idea behind a module, is that it's a file of reuseable code
 * we can improt sections of pre-written code to use whenever we need
 * Great for any general utiltiy values and functions
 * helps to make your code more reuseable and maintanable
 * think of modules as seperate chapters of a book.
 * Each index.js script we have made so far, could in theory be a module.
 */

//To use a module, see HTML side of this.
//To create a module, see math_utils.js(our module)

//Now lets IMPORT the module parts
//Syntax as follows:
//import{functions,seperated,by commas} from "relative/absolute/filepath.js"
/*import{PI, getCircumference, getArea} from "./math_util.js"*/
//another way to import, if there are alot of functions is to 
//import asterisk, in this case you can also give the module an alias
//import ALL as mathUtil from (path)
import * as mathUtil from "./math_util.js"

//We can now use the functions from the module!
//if you imported the functions under a nickname(mathUtil) make sure to include that
console.log(mathUtil.PI)

let circumference = mathUtil.mathUtilgetCircumference(10);
console.log(circumference);

let area = mathUtil.getArea(10);
console.log(area);