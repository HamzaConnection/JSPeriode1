import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
// npm install --save-dev babel-loader babel-core babel-preset-env
// To get babel to transpile the code see webpack.config.js

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
            console.log(propertyNames)
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

// https://lodash.com/docs#keys   (use it to iterate over the keys in an array)
// https://lodash.com/docs#startCase  (Use to change the casing of a property firstName -> First Name)

