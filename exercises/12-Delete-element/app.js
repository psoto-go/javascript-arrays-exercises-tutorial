var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    var result = []
    for(var i = 0;i<people.length;i++){
    if(people[i] != personName){
        result.push(people[i])
    }
}
    return result
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));