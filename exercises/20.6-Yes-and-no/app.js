let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
function pre(array){
    for(var aux in array){
        if(array[aux] == 1)
            return array[aux] = "wiki"
        else
            return array[aux] = "woko"
    }
}
var civilianHours = theBools.map(pre);
console.log(civilianHours)
