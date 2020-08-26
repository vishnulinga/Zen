let available={}
let enquiries:string[]
class pets{
    
    animal :string
    name:string
    age:number
    vaccinated:boolean
    constructor(animal:string,name:string,age:number,vaccinated:boolean)
    {
        this.animal=animal
        this.name=name
        this.age=age
        this.vaccinated=vaccinated
        if(this.animal in available)
        available[this.animal]=available[this.animal]+1
        else
        available[this.animal]=1
    }


}
class request{
    constructor(arr: string[]){
        
        enquiries.push(arr)
    
    }
     
  insert(arr:string[]){
     
      for(let i=0;i<arr.length;i++)
      {
          if(arr[i] in available===false)
          return "not available"
          
      }
      return "available"
  }

  find(){
      let str=""
      for(let key in available)
      str+=key+"-"+available[key]+" "
      return str
  }
}

let dog1=new pets('dog','snoopy',1,true)
let dog2=new pets('dog','scooby',2,true)
let cat=new pets('cat','whisky',2,true)
let parrot=new pets('parrot','chirpy',1,false)
let enquiry1=new request(['dog','cat','parrot'])
// console.log(enquiry1.insert(['dog','cat','parrot']))
console.log(enquiry1.find())
