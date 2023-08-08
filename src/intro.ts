// let user = {
//     name: "Ezra",
//     age: 18
// }

// console.log("Hello  World")
// console.log(user.name)

//Variables
//strings
// let greetings: string = " Hello Ezra"

// greetings.toLowerCase()

// console.log(greetings)

//numbers

// let userId = 334455.8
// userId.toFixed

//boolean
// let isLoggedIn = false

//any
// let hero: string

// const getHero = () => {
//     return "Thor"
// }

// hero = getHero()

//functions
// const addNum = (num: number) => {
//     return num + 2
// }
// addNum(5)

// const getUpper = (val: string) => {
//     return val.toUpperCase
// }
// getUpper('monday')

// const signUp = (name: string, email: string, password: string, isPaid: boolean) => {}
// signUp("John", 'j@gmail.com', '2023', false)

// const logIn = (name: string, email: string, password: boolean) => {}
// logIn('Mike', 'Mark@gmail.com', true)

//const heroes = ['thor', 'spiderman', 'ironman']
// const heroes = [2021, 1999, 2023]


// for(let i = 0; i < heroes.length; i++){
//     console.log(`Birth year: ${heroes[i]}`)
// }

// const consoleError = (errmsg: string): void => {
//     console.log(errmsg)
// }

// const handleError = (msg: string): never => {
//     throw new Error(msg)
// }

//objects
const User = {
    name: 'Kofi',
    email: 'kofi@gmail.com',
    isActive: true
}


//Type Aliasses
// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// const createUser = (user: User) => {

// }

// createUser({name: 'Nathan', email: 'new@gmail.com', isActive: false})

// type Details = {
//     readonly _id: string,
//     firstName: string,
//     email: string,
//     isActive: boolean
// }

// const students = (info: Details) => {
//     return `Welcome ${info.firstName} to AIT
//             Your school id is: ${info._id}
//             `
// }
// console.log(students({_id: 'ADS23A00054Y', firstName: "John", email: 'John@ait', isActive: false}))

// type StringOrNum = string | number

// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`)
// }

// console.log(`
//     ${logDetails(211, 'Pizza')}
// `)

// type objWithName = {
//     firstName: string, 
//     uid: StringOrNum
// };

// const greetUser = (user: objWithName) => {
// console.log(`${user.firstName} says hello`)
// }
// console.log(greetUser({firstName: 'Michael', uid: 212}))

// interface Point {
//   x: number;
//   y: number;
// }
 
// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
 
// printCoord({ x: 100, y: 100 });
