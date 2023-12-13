export const addTwo = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b

export default (function doSomeMath() {
    console.log("function is calling");
    return{
        addTwo,
        multiply,
        subtract,
     }
})();
