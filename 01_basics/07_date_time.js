let myDate = new Date() //typeOf Date -> Object
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime()) //can be used for comparison purposes

let newDate = new Date()
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())