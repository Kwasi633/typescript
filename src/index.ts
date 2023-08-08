
// let sport: string = 'I like football';

// let id: number = 6

// console.log(sport)

// const user: { 
//     name: string; 
//     age: number }  = { name: 'Alice', age: 28,};

// console.log(user)

// let someValue: number | string = 'Hello'
// someValue = 30
// console.log(someValue)

// let person: (string | number | boolean | {} )[] = ['Danny', 1, true];
// person[0] = false
// person[1] = {name: 'Danny'} // Error - person array can't contain objects
// console.log(person)

// type Point = { x: number; y: number };
// type ColorPoint = Point & { color: string };

// let point: ColorPoint = { x: 10, y: 20, color: 'red' };

// const age = (year: number): string => {
//     const calc = 2023 - year;
//     return 'You are ' + calc + ' years'
// };

// console.log(age(1999)); 

// const greet = (name: string) => {
//   console.log(`Hello,  ${name}`);
// }

// greet("Kofi Manu"); 

// const sum = (a: number, b: number): number => {
//   return a + b;
// }

// const result = sum(77, 3);
// console.log("The result is:", result); 

// function sayHello(name?: string) {
//   if (name) {
//     console.log("Hello, " + name);
//   } else {
//     console.log("Hello, guest!");
//   }
// }

// sayHello(); // Output: Hello, guest!
// sayHello("Alice"); // Output: Hello, Alice

// const customerBalance = ( amount: number, cost: number, customerName?: string,) => {
    
//     const receipt: string = customerName ? 
//     `
//     Your balance is: ${amount - cost}
//     Thanks for shopping with us ${customerName}
//     ` 
//     : 
    
//     `
//     Your balance is: ${amount - cost} 
//     See you soon!
//     `
//     return receipt
// }

// console.log(customerBalance(2700, 1973, 'Mark'))

// type StringOrNumber = string | number;

// type PersonObject = {
//   name: string;
//   id: StringOrNumber;
// };

// const person1: PersonObject = {
//   name: 'John',
//   id: 1,
// };

// const person2: PersonObject = {
//   name: 'Delia',
//   id: 2,
// };

// const sayHello = (person: PersonObject) => {
//   return 'Hi ' + person.name;
// };

// const sayGoodbye = (person: PersonObject) => {
//   return 'Seeya ' + person.name;
// };

// const greetUser = (username: string = "Developer") => {
//   console.log("Hello, " + username);
// }

// greetUser(); 
// greetUser("John");

// function sum(...numbers: number[]) {
//   let total;
//     for ( total = 0; ) {
//     total += num;
//   }
//   return total;
// }

// const result = sum(1, 2, 3, 4, 5);
// console.log("Sum:", result); 

// const sum = (...numbers: number[]) => {

//   let total = 0;
  
//   const addFunc = (num) => total += num;

//   numbers.forEach(addFunc)
//   return total;
// }

// const result = sum(1, 2, 3, 4, 5);
// console.log("Sum:", result); 

// const character = 'mario'

// console.log(character)

// const inputs = document.querySelectorAll('input')

// console.log(inputs)

// inputs.forEach(input => {
//     console.log(input)
// })
// arrays
// let names = ['luigi', 'yoshi', 'mario']

// names.push('toad')

// let numbers = [10, 20 ,30, 40]

// let mixed = ['Kofi', 5, 'Fred', true, 55]

// mixed[0] = 22

// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30
// }

// explicit types
// let character: string;

// let age: number

// let isLoggedIn: boolean;

// isLoggedIn = true
// age = 20

// //arrays
// let ninjas: string[] = [];
// ninjas.push('John')

// //union types
// let mixed: (string | number | boolean)[] = []

// mixed.push('hello')
// mixed.push(200)
// mixed.push(true)
// console.log(mixed)

// let uid: string | number;
// uid = 100
// uid = 'Nromal variable'

// //Objects
// let ninjaOne: object;
// ninjaOne = {name: 'John', age: 20}

// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColour: string
// }

// ninjaTwo = {age: 8, name: "Kofi", beltColour: 'red' }

//Functions
// let greet: Function;

// greet = () => {
//     console.log("Hello, again..")
// }

// const add = (a: number, b: number, c?: number | string) => {
//     console.log(a + b)
// }
// add(10,5)

// const minus = (x: number, y: number) => {
//     return x - y
// }
// const result = minus(20,8)

// type StringOrNum = string | number
// type objWithName = {firstName: string, uid: StringOrNum};

// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`)
// }

// const greetUser = (user: objWithName) => {
// console.log(`${user.firstName} says hello`)
// }

// console.log(`
//     ${logDetails(211, 'Pizza')}
// `)

//Function signature
// let greet: (a: string, b: string) => void;

// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`)
// }

let calc: (x: number, y: number, z:string) => number

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add'){
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}

// let showDetails: (obj: {username: string, age: number}) => void

// type person = {username: string, age: number}
  
// showDetails = (ninja: person) => {
//     console.log(`${ninja.username} is ${ninja.age} years old`)
// }

// console.log("Testing...")

//Classes
// class Invoice {
//     readonly client: string;
//     private details: string;
//     amount: number;

//     constructor(c: string, d: string, a: number){
//         this.client = c;
//         this.details = d;
//         this.amount = a
//     }

//     format(){
//         return `${this.client} owes $${this.amount} for ${this.details}`
//     }
// }
// const invOne = new Invoice('John', 'work on the website', 3000)
// const invTwo = new Invoice('Michael', 'work on the app', 5000)

// // console.log(invOne, invTwo)

// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })
import  {Invoice} from './classes/invoice.js'
import { Payment } from './classes/payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice('Mark', 'web work', 450)
docTwo = new Invoice('Nathan', 'plumbing work', 350)

let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

//console.log(docs)

// const invOne = new Invoice('John', 'work on the website', 3000)
// const invTwo = new Invoice('Michael', 'work on the app', 5000)

// // console.log(invOne, invTwo)

// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })

// //Inerface
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(b: number): number;
}

const me: IsPerson = {
    name: "John",
    age: 30,
    speak(text: string): void{
        console.log(text)},
    spend(amount: number): number {
        console.log('I spent', amount)
        return (amount)
    }
}

const greetPerson = (person: IsPerson) => {
    console.log('Hello', person.name)
}
greetPerson(me)

//GENERICS
