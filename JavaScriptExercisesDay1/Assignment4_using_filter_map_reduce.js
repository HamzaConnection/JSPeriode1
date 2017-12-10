var document = require('../4.html');
//a)

let namesA = ["kurt", "Ib", "Lars", "Ida"];

let filterMethod = namesA.map(function(name){
    var str = "<li>" + name + "</li>"
return str;
});

namesWithLi = filterMethod;

var mappedNames = "<ul>\n" + namesWithLi.join("\n") + "\n<ul>"

console.log("Assignment A:\n " + mappedNames);

//b)

let namesB = [{name: "kurt",phone: 12345678}, {name: "bo",phone: 12341234}, {name: "jens",phone: 56785678}, {name: "ole",phone: 12121212}];


let filterMethodB = namesB.map(function(person){
    var str = "<tr>\n  <td>" + person.name + "</td>\n  <td>" + person.phone + "</td>\n</tr>"
return str;
}); 

namesWithLiB = filterMethodB;

var mappedNamesB = "<table><tr>\n<th>Name </th>\n <th>Phone </th>\n</tr>\n" + namesWithLiB.join("\n") + "</table>";

console.log(mappedNamesB);


//D)

console.log("D)\n\n");

let namesD = [{name: "kurt",phone: 12345678}, {name: "bo",phone: 12341234}, {name: "jens",phone: 56785678}, {name: "ole",phone: 12121212}];

function updateTable() 
{
    let namesFilter3 = namesD.filter(function(person)
    {
        return person.name.length > 3;
    });

    console.log(namesFilter3);
    console.log("\n\n");

    let persons2 = namesFilter3.map(function(person)
    {
        return `  <tr><td>${person.name}</td>\n  <td>\n <td>${person.phone}</td></tr>\n`
    });


    console.log(persons2);

    let filteredToString = persons2.join("");
    let filteredTable = `\n${filteredToString}`;
    console.log("\n" + filteredTable + "\n");
    
    document.getElementById("names").innerHTML = filteredTable;
}

updateTable();

 
