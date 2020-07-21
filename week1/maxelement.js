const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter array elements : `, (elements) => {
  
  

var arr=elements.split(" ").map(x=>+x)
var max=arr[0]
for(var i=1;i<arr.length;i++)
if(arr[i]>max)max=arr[i]
console.log('Maxelement in the array is '+max)


readline.close();
})