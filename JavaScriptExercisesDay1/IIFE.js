// Immediately Invoked Function Expressions


var iife = function()
{
    console.log("Hello World!")
}();

//Protect against polluting the global environment
(function(){
    var txt = "Hello World";
    console.log(txt);  //This is ok
  })();
  
  console.log(txt);  //Throws an error