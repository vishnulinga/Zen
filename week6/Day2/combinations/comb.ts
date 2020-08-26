let array=[]
let result=(...args)=>{
while(args.length!==1)
{
let rarr=[],length=args.length
for(let i=0;i<args[0].length;i++)
for(let j=0;j<args[1].length;j++)
rarr.push([args[0][i]]+" "+args[1][j])
args.splice(0,2,rarr)
}
return args
}
let comb=(result(['a','b','c'],['d','e','f'],['g','h'],['i','j']))
for(let i=0;i<comb[0].length;i++)
array.push([comb[0][i]])
console.log(array)

