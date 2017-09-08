function callback (err, data) { /* ... */ }

var fs = require('fs');

var file = process.argv[2];


var content = fs.readFile(file,function callback(err,data)
{
    
    var contentstr = data.toString();
    var numberOfLines = contentstr.split('\n');
    console.log(numberOfLines.length-1);
    return numberOfLines.length-1;
    
    
})

