class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person { // structor
    firstName: string;
    lastName: string;
}

function greeter(person: Person) { // return type Person 
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);

var anything: any = "dog" // this could be anything

// generics
function genericFunction<T>(something: T): T { return something; }



//document.body.innerHTML =genericFunction<string>("Generic") ;

// to build press Tasks -> tsc: build - type