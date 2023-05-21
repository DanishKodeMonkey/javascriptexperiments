/**
 * Synchronous code is code executed in a ordered sequence
 * through step-by-step linear instructions.
 * It starts now, and finishes now.
 * The rest of the program has to wait for a synchronous process.
 */

/**
 * Asynchronous code is out of sequence
 *  Examples of when would be
 *      when accessing a database
 *      fetching a file
 *      or other tasks, that take time
 * It starts now, and finishes sometime later.
 */

//Example of Synchronous code:
console.log("START"); //The first step of a synchronous program
console.log("This step is synchronous");//The second step, has to wait for the first step to finish
console.log("END");//The third step, has to wait for the second, and first step to finish.

//Example of Asynchronous code

console.log("START"); //The first step of a synchronous program
setTimeout(() => console.log("This is asynchronous"), 5000) //An example of asynchronous code, it finishes OUT OF ORDER (5000ms) of the code.
console.log("END");//The third step, has to wait for the first step, BUT NOT THE SECOND STEP ANYMORE AS IT HAS ALREADY STARTED