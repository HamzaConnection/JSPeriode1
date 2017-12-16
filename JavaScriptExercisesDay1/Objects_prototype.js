  
function Person(name, birthday, hobby, email) {
    this.name = name;
    this.birthday = birthday;
    this.hobby = hobby;
    this.email = email;
  }
var person = new Person("Hamza", "1993", "fitness", "hamza@gmail.com")  
var person1 = new Person("Bob", "1888", "Javascript", "dzu@gmail.com")  

//All objects inherit methods and properties from Object.prototype,
// can be overwritten
Person.prototype.printInfo = function()
{
  console.log('Person info: ' + this.name + ", " + this.birthday + ", " + this.hobby + ", " + this.email)
}
person.printInfo();
person1.printInfo();



// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

// console.log('Is rect an instance of Rectangle?',
//   rect instanceof Rectangle); // true
// console.log('Is rect an instance of Shape?',
//   rect instanceof Shape); // true
// rect.move(1, 1); // Outputs, 'Shape moved.'


