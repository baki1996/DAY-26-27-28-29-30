"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This function takes out the first 8characters from any text
function extractFirstTenChars(str) {
    return str.substring(0, 12);
}
// Example: Taking the first 10 characters of a sentence
console.log(extractFirstTenChars("Hello, JavaScript world!"));
