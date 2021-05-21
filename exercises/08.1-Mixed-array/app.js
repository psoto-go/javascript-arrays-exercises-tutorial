var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
var arr=[]
for(var i =0 ; i<mix.length;i++){
    var va= typeof(mix[i])
    arr.push(va)
}
console.log(arr)