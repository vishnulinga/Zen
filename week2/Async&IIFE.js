var narr=[1,2,3,4,5,6,7,8,9,10],narr1=[3,2,5,6,7,1,3,7,6,4]
var strarr=['apple','banana','grapes','mango','pineapple',"abccba","weekeew"]

//.........................................................
var oddarr=(function(arr){
    let oddarr=[]
    for(let i=0;i<arr.length;i++)
    if(arr[i]%2!==0)
    oddarr.push(arr[i])
    return oddarr
})(narr)
console.log("odd numbers in array are:"+oddarr)
//........................................................

var capstr=(function(arr){
    let rarr=[]
    rarr=rarr.concat(arr)
    rarr.forEach(function(val,i,arr){ arr[i]=val.toUpperCase()})
    return rarr
})(strarr)
console.log(strarr+"after converting to Caps:"+capstr)
//..........................................................

var sum=(function(arr){return arr.reduce(function(sum,val){
    return sum+val
},0)
})(narr)
console.log("sum of elements in array:"+sum)
//.............................................................
function isprime(n)
{if(n==1)return false
    for(let i=2;i<n;i++)
    if(n%i===0)return false
    return true
}
var primearr=(function(arr){
    let rarr=[]
    arr.forEach(function (val){
        if(isprime(val))rarr.push(val)})
        return rarr
})(narr)
console.log("prime numbers in array are:"+primearr)
//...............................................................
function ispal(str)
{
    if(str===str.split("").reverse().join(""))
    return true
    else
    return false
}
var palarr=(function(arr){
    let rarr=[]
    arr.forEach(function(val){
        if(ispal(val))rarr.push(val)
    })
    return rarr
})(strarr)
console.log("palindromes in array ["+strarr+"] are: "+palarr)
//............................................................
var sortarray=(narr+","+narr1).split(",").map(x=>+x).sort(function(a,b){return a-b})
if(sortarray.length%2===0)
console.log("median of arrays is:"+sortarray[sortarray.length/2]+sortarray[(sortarray.length/2)-1])
else
console.log("median of arrays is:"+sortarray[sortarray.length/2])
//..................................................................
function isunique(n,arr)
{let count=0
    for(let i=0;i<arr.length;i++)
    if(n==arr[i])
    count++
    if(count==1)
    return true
    else 
    return false
}
var duparr=(function(arr){
    let rarr=[]
    arr.forEach(function(val){
        if(isunique(val,arr))
        rarr.push(val)
    })
    return rarr
})(narr1)
console.log("original array:"+narr1+" unique elements are:"+duparr)
//...............................................................
function rotateleft(m,arr)
{let rarr=[],n=(-1)*m
rarr=rarr.concat(arr)
rarr.push(rarr.splice(0,n))
return rarr
}
function rotateright(n,arr)
{
    let rarr=[]
    rarr=rarr.concat(arr)
    rarr.unshift(rarr.splice(rarr.length-n,n))
    return rarr
}
var rotarr=(function(arr,n){
    if(n==0)return arr
    else if(n>0)return rotateright(n,arr)
    else return rotateleft(n,arr)
})(narr,3)
console.log("after rotating ["+narr+"] "+3+" times: ["+rotarr+"]")


//......................................................................

/*output:
odd numbers in array are:1,3,5,7,9
apple,banana,grapes,mango,pineapple,abccba,weekeewafter converting to Caps:APPLE,BANANA,GRAPES,MANGO,PINEAPPLE,ABCCBA,WEEKEEW
sum of elements in array:55
prime numbers in array are:2,3,5,7
palindromes in array [apple,banana,grapes,mango,pineapple,abccba,weekeew] are:abccba,weekeew
median of arrays is:55
original array:3,2,5,6,7,1,3,7,6,4 unique elements are:2,5,1,4
after rotating [1,2,3,4,5,6,7,8,9,10] 3 times: [8,9,10,1,2,3,4,5,6,7]
*/
