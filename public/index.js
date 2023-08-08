"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
const invoice_js_1 = require("./classes/invoice.js");
let docOne;
let docTwo;
docOne = new invoice_js_1.Invoice('Mark', 'web work', 450);
docTwo = new invoice_js_1.Invoice('Nathan', 'plumbing work', 350);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const me = {
    name: "John",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return (amount);
    }
};
const greetPerson = (person) => {
    console.log('Hello', person.name);
};
greetPerson(me);
