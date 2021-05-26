
function lyricsGenerator(array){
var salida = ""
    for(var i in array){
        if(array[i]==1 && array[i-1]==1 && array[i-2]==1){
            salida +="Drop the base !!!Break the base!!! "
        }
        else if(array[i]==0){
            salida += "Boom "
        }else if(array[i]==1){
            salida += "Drop the base "
        }
        
    }
    return salida
}

// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))