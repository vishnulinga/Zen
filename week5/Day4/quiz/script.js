var outerdiv=document.createElement("div")
outerdiv.setAttribute("class","outerdiv")
var container=document.createElement("div")
container.setAttribute("class","container-fluid")
var h1=document.createElement("h1")
h1.setAttribute("class","h1")
h1.innerText="Quick Quiz"
container.appendChild(h1)

var div=document.createElement("div")
div.setAttribute("class","innerdiv")
var btn=document.createElement("button")
btn.setAttribute("class","btn btn-primary button")
btn.setAttribute("onclick",game())
btn.innerText="Play"
div.appendChild(btn)
container.appendChild(div)

var div=document.createElement("div")
div.setAttribute("class","innerdiv")
var btn=document.createElement("button")
btn.setAttribute("class","btn btn-primary button")
btn.setAttribute("onclick",game())
btn.innerText="High Scores"
div.appendChild(btn)
container.appendChild(div)


outerdiv.appendChild(container)
document.body.append(outerdiv)
console.log(outerdiv)

function game()
{

}