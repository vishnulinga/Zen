var obj1={
    a:1,
    b:2,
    c:3
    
}
var obj2={
    a:4,
    b:5,
    c:6
    
}
var d = function()
    {
        console.log("a:"+this.a+" b:"+this.b+" c:"+this.c)
    }
var print=d.call(obj1)
var print1=d.apply(obj2)
print1=d.bind(obj1)
print1()

