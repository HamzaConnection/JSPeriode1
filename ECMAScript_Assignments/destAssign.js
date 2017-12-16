//The destructuring assignment syntax is a JavaScript expression
//That makes it possible to unpack values from arrays, or properties from objects, into distinct variables.


let fName = "Kurt", lName = "Wonnegut";

[lName, fName] = [fName,lName]

console.log(`First: ${fName}, Last: ${lName}`);

var foo = ['one', 'two', 'three'];

// // Array destructuring
// var [one, two, three] = foo;
// console.log(one); // "one"
// console.log(two); // "two"
// console.log(three); // "three"


function getPerson(){
  return {
    firstName: "Kurt",
    lastName: "Wonnegut",
    gender : "Male",
    email: "kurt@wonnegut.dk",
    phone: "12345",
  }
}

var {lastName,phone} = getPerson()
//console.log(`Last: ${lastName}, Phone: ${phone}`)