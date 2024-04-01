"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Function declaration for squaring a number
function squareDeclaration(number) {
    return number * number;
}
// Function expression for squaring a number
const squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(2));
console.log(squareExpression(2));
