let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
var pa = par.replace(/ /g, "")
for(var i = 0; i < pa.length;i++){
    pa = pa.toLowerCase()
    if(counts[pa[i]] == undefined ){
        counts[pa[i]] = 1;
    }else{
       counts[pa[i]] += 1
    }

}
console.log(counts);