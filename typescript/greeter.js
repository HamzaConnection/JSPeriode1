var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
var anything = "dog"; // this could be anything
// generics
function genericFunction(something) { return something; }
//document.body.innerHTML =genericFunction<string>("Generic") ;
// to build press Tasks -> tsc: build - type 
//# sourceMappingURL=greeter.js.map