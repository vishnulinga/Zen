
let chunk = (arr:Array<any>, size:number) =>
  {let rarr=[]
      while(arr.length>=size)
      {
          
          rarr.push(arr.splice(0,size))
      }
      rarr.push(arr)
      console.log(rarr)
      return rarr
  }
  

let sum = (arr:Array<any>) => arr.reduce((sum, x) => sum + x, 0);

let filter = (arr : Array<any>) => arr.filter(element => element<0);

let find = (arr:Array<any>,num:number) =>{ 
    for(let i=0;i<arr.length;i++)
    if(arr[i]===num)
    return i
    return `${num} is not present`
}

let reduce = (arr:Array<any>) => {
   let sum=0
    for(let i=0;i<arr.length;i++)
    sum+=arr[i]
    return sum
}
