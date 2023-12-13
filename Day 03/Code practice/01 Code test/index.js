import doSomeMath from "./Math.js"
import {addTwo,multiply,subtract} from "./Math.js";
import * as everything from "./Math.js"

console.log(doSomeMath.addTwo(5,5));
console.log(addTwo(5,5))
console.log(everything); // returning module object
console.log(everything.default.addTwo(5,5)); //

