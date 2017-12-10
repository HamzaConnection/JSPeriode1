// 1) 

var array = ["Lars", "Jan", "Peter", "Bo", "Frederik"]; 

var filteredArray = array.filter(function(name)
{
    return name.length <=3;
})

//console.log(filteredArray);

var uppercaseArray = array.map(function(name)
{
    return name.toUpperCase();
})

//console.log(uppercaseArray);

// 2 

function myFilter(array, callback)
{
    var arrayTobeReturned = [];

    array.forEach(function(name) {
        
        var shouldInclude = callback(name)

    if(shouldInclude)
        {
            arrayTobeReturned.push(name);       
        }
})
    return arrayTobeReturned;
}

var customFilteredArray = myFilter(array, function(name)
{
    return name.length<=3;
});


//console.log(customFilteredArray);

function myMap(array, callback)
{
    var arrayTobeReturned = [];

    array.forEach(function(name)
{
    var mappedInput = callback(name); 
    arrayTobeReturned.push(mappedInput); 
})
return arrayTobeReturned;
}

var customerMappedArray = myMap(array, function(name)
{
    if(Array.isArray(array)) // to make sure the argument is an array
        {
            return name.toUpperCase();
        }
    
})
//console.log(customerMappedArray)

//3) Using the Prototype property to add new functionality to existing objects

Array.prototype.myforEach = function(callback){
    for(var i =0; i < this.length; i++){
      callback(this[i]);
    }
  };

  array.myforEach(function(name)
{
    //console.log(name);
});
  

///////


let names = ["Nicklas", "Michael", "Mick", "Hamza", "Lasse", "Bo"];

//OBS! this is bad practice, and should be considered heavily before usage!

Array.prototype.myMap = function(callback){
    let returnArr = [];
    this.forEach((value)=>{
        returnArr.push(callback(value))
    })
    return returnArr;
};


Array.prototype.myMap2 = function(callback){
    let returnArr = [];
    this.forEach(function(value)
    {
        returnArr.push(callback(value));
    })

    return returnArr;
};


Array.prototype.myFilter = function(callback){
    let returnArr = [];
    this.forEach((value)=>{
        if(callback(value)) {returnArr.push(value);}
    });
    return returnArr;
};

Array.prototype.myFilter2 = function(callback){
    let returnArr = [];
    this.forEach(function(name)
{
    if(callback(name))
        {
            returnArr.push(name);
        }
        
})
    return returnArr;
}

//use and print filter function
let filterNames = names.myFilter2((name)=>{return name.length<=4});
console.log(filterNames);




// using Map2 functions 
let mappedNames2 = names.myMap2(function(name)
{
    return name.toUpperCase();
})

//console.log(mappedNames2)

    




