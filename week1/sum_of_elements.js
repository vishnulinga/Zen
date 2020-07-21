const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter array elements : `, (elements) => {
  
  

var arr=elements.split(" ").map(x=>+x)
var sum=0
for(var i=0;i<arr.length;i++)
sum=sum+arr[i]
console.log(sum)


readline.close();
})