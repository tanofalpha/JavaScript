const name = "apple"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//another way to declare strings
const gameName = new String('app-lel')

console.log(gameName[0]);
console.log(gameName.__proto__)  //Not understood

//There are many functions or methods like substring, slice, trim etc

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hi'))

console.log(gameName.split('-'))