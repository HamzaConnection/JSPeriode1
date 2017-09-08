var fs = require('fs');



var content = fs.readFileSync(process.argv[2])

var contentstr = content.toString();
var numberOfLines = contentstr.split('\n');

console.log(numberOfLines.length-1);



/**
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines);
  */