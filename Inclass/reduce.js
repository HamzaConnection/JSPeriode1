// assigment 4 b)
var numbers = [2,3,67,33];
var numberString = numbers.join("-");
// this is the reduce function notice that .join
// takes the number array and reduces it to 
// a simple string
console.log(numbers);
console.log(numberString);

var reducer  = function(accumulator, item){
 return accumulator + item;
}

var initialValue = 0;
var result = numbers.reduce(reducer,initialValue);
console.log(result)