const accountId = 144553   //cannot be changed
let accountEmail = "hitesh@gmail.com" //accounts for scope
var accountPassword = "123456" //does not care about scope....not very often in use
accountCity = "Jaipur" //can be done but don't do
let accountState; //; is not necessary

/*Prefer not to use use var because of issue in block scope and functional scope*/ 
console.table([accountEmail, accountPassword, accountCity, accountState])