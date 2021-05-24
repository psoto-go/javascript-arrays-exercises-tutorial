let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
var resultingNames = allNames.filter(function(word){
    return (word[0] =="R")
})

console.log(resultingNames);