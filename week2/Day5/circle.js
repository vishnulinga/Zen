class Circle{
    constructor(...args)
    {
        if(args.length==1)
        this.radius=args[0]
        if(args.length==2)
        {this.radius=args[0]
        this.color=args[1]}
        
    }
    getRadius()
    {return this.radius}
    getColor()
    {return this.color}
    setRadius(x)
    {this.radius=x}
    setcolor(x)
    {this.color=x}
    tostring()
    {return this.radius+" "+this.color}
    getArea()
    {return 22*this.radius*this.radius/7}
}

var circle=new Circle(2,'red')
console.log(circle.getRadius())
console.log(circle.getColor())
console.log(circle.tostring())