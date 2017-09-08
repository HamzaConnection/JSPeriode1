  
function Person(name, birthday, hobby, email) {
    this.name = name;
    this.birthday = birthday;
    this.hobby = hobby;
    this.email = email;
  }
var person = new Person("Hamza", "1993", "fitness", "hamza@gmail.com")  

Person.prototype.printInfo = function()
{
  console.log('Person info: ' + this.name + ", " + this.birthday + ", " + this.hobby + ", " + this.email)
}
person.printInfo();