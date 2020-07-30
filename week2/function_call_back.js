function action(i,ops)
{
    let a=10,b=20
    return ops[i](a,b)
}
function add(a,b)
{return a+b}
function sub(a,b)
{return a-b}
function mul(a,b)
{return a*b}
var ops=[add,sub,mul]
var a=10,b=20

console.log(action(0,ops))
console.log(action(1,ops))
console.log(action(2,ops))

