var sum = require('./operations/sum.js') //=> .sum here we dont need the .sum because we export a function and not a propertie of an object
var multiplication = require('./operations/multiplication.js') // in case we export in app.js the ppropertie 'module.exports.sum = sum' we need the .sum in here
var substration = require('./operations/substration.js')// but in this case we export the function 
var division = require('./operations/division.js')
var moment = require('moment') //=> this dont need the root because the node it goes to look for the moment file,
                               // if it don't fingd it in the same level it will be look for it in other level.

console.log(moment().format('LLLL'))
sum(2, 7)
multiplication(5, 5)
division(10, 5)
substration(20, 10)
