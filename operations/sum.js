function sum (a, b) {
    var res = a + b
    console.log ("the sum of " + a + " & " + b + " is:" + res)
}

//module.exports.sum = sum ____=> this is the best way to export(in case we have more ythan one funstion in same file), in the case to have more than one function in this file
//so, how we only have one function in one function we can do

module.exports = sum //=> we can subscrive module.exports, so now we export the function , because is only one and not the propertie of the pbject like 
//in before. => best way to do it

//=> module.exports.sum here it's am object, so we export the result of calling the method within the funtion

/*module.exports = {
	sum: sum,
	multiplication: multiplication
}
==> we also can do it like this because module.exports is an object */

// ==> module.exports by default is a object and we can add or reduce the object, but we also can subescrivir a
//and say that will be a function, or an array or a string.