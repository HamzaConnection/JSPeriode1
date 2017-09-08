//console.log(process.argv);
//console.log(Number(process.argv[2]));

function sum(arr)
{
    var total = 0;
    if(arr.length>2)
        {
            for (i = 2; i < arr.length; i++) { 
                total += Number(arr[i]);
            }
        }
        return total;
}


console.log(sum(process.argv));
