console.log(this)//global window

var myCar = {
    name: 'fast',
    speed: 100,
    print: function(){
        console.log(this); //objectet myCar
    }
};

myCar.print();

// understanding .call

var obj = {num:2};

var addToThis = function(a)
{
    return this.num + a;
}

+ addToThis.call(obj,3); 
// notice .call attaches this to the obj and the other 
// argumenent is simply a that the function requires
// to see the result just console.log 

var arr = [1,2,3]
addToThis.apply(obj,arr);
// noticed here we use .apply where we can pass 
// in an array instead of single argument
// that's the difference between call and apply

var bound = addToThis.bind(obj,arr); // bind return a function
//you can now call the function with bound(arguments here)


