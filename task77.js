"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greetUser(name = "anonymous") {
    console.log(`Hello, ${name}!`);
}
greetUser("Baki");
greetUser();
