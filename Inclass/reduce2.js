// assignment 4 c)
var members = [
    { name : "Peter" , age : 18},
    { name : "Hamza" , age : 25},
    { name : "Nicklas" , age : 52},
    { name : "Bob" , age : 23},
]

var reducer = function(accumulator, member, index, arr)
{
    var temp = accumulator + member.age;
    if(index === arr.length-1){
        return temp/ arr.length;
    }
    return temp;
}
var initlValue = 0; 

result = members.reduce(reducer,initlValue);

//console.log(result);

// assignment 4 d) 

var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];


var voteCounter = votes.reduce(function(allVotes, vote)
{
    if(vote in allVotes)
        {
            allVotes[vote]++;
        }
            else {
            allVotes[vote] = 1;
        }
        return allVotes;
},{}) // {} this is the empty array which is our initial value if you press cmd + shift + space
// you will see the parametor the reduce takes

console.log(voteCounter);


