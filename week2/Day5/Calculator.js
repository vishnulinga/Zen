class Calculator
{
    constructor(num1,num2)
    {
        this.num1=num1
        this.num2=num2
        
    }
    add()
    {
      
       return this.num1+this.num2
    }
    sub()
    {
        
        return this.num1-this.num2
    }
    mul()
    {
       
        return this.num1*this.num2
    }
    div()
    {
        return this.num1/this.num2
    }
   
}
var a=new Calculator(10,20) 

var b=new Calculator(30,40)

console.log(a.mul(),b.div(),a.sub())