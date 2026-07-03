//arrays-->shallow copy: properties share the same reference point  

//other is deep copy

const myArr = [1, 2, 3, 4, 5] 
// const myHeroes = ["shaktiman", "Ironman"]

// console.log(myArr[2])

// myArr.push(6)   //opposit is pop(6)

// myArr.unshift(9)
// myArr.shift()
// //myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(5))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)

//slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B ", myArr)

console.log("A ", myArr)

const myn11 = myArr.splice(1, 3)
console.log(myn11)
console.log("C ", myArr)