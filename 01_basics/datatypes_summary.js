//Data has been categorized on the basis of how they are stored in the memory and how they are accessed:
//1. Primitive: 
//  7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


//JavaScript is a dynamically typed language because: 
//1. Type decided at runtime
//2. Variables can change type
//3. No compile-time type checking


//2. Non- Primitive (Reference Type): 
// Array, Objects, Functions
//Array:
const heroes = ["shaktiman", "naagraj", "doga"]

//Object:
let myObj = {
    name: "Apple",
    age: 22,
}
//Function:
const myfunction = function(){
    console.log("Hello world")
}
console.log(typeof myObj)
//Example of Symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)