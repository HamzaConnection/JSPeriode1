import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'


function Person(fn, ln, s) {
    this.firstName = fn;
    this.lastName = ln;
    this.favoriteSport = s;
}
const persons = [
    new Person("Kurt", "Wonnegut", "Socker"),
    new Person("Jan", "Peterson", "Hockey"),
    new Person("Jane", "Peterson", "Skating"),
    new Person("John", "Hansen", "Socker"),
]




function makeTable(persons) {


    var propertyNames = _.keysIn(persons[0]);
    
    let headerRow = propertyNames.map(function (name) {
        let startCaseVariable = _.startCase(name);
        return `<th>${startCaseVariable} </th>`
    });
    
    let personRow = persons.map(function (person) {
        var values = "";
        for (var i = 0; i < propertyNames.length; i++) { 
            console.log(i);
            values+=`<td> ${person[Object.keys(person)[i]] } </td>`;
        }
        return `<tr>
        ${values}
        </tr>`
    });
    
    let headerRowString = headerRow.join( );
    let personRowString = personRow.join( );
    
    let tableString = `<table id="table" width="70%" border="1">
    <tr> ${headerRowString}</tr> ${personRow}   </table>`
    
    return tableString;

}

const table = makeTable(persons);

document.getElementById('my-table').innerHTML = table;

// use filter function for assingment 3g

