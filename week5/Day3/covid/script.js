let div = document.createElement("div")
div.setAttribute("style","width:100%;height:auto;")
div.setAttribute("class","card-group")
document.body.appendChild(div)


async function processCountry(){
 
    try{
        let result = await fetch('https://api.covid19api.com/countries')
        let arr=await result.json()
    for(let i=0;i<arr.length;i++){
        let container = document.createElement("div")
        container.setAttribute("style","display:flex;justify-content:center;padding:5px;")
        container.setAttribute("class","col-4")
        
        let cdiv = document.createElement("div")
        cdiv.setAttribute("class","card")
        
        let cbody = document.createElement("div")
        cbody.setAttribute("class","card-body")
        
        let chead = document.createElement("h5")
        chead.setAttribute("class","card-title")
        chead.innerText = arr[i]["Country"]
        cbody.appendChild(chead)

        let ccode = document.createElement("p")
        ccode.setAttribute("class","card-text")
        ccode.innerText = `Country Code : ${arr[i]["ISO2"]}`
        cbody.appendChild(ccode)

        let cslug = document.createElement("p")
        cslug.setAttribute("class","card-text")
        cslug.innerText = `Country Slug : ${arr[i]["Slug"]}`
        let slug = arr[i]["Slug"]
        cbody.appendChild(cslug)
        

        let button = document.createElement("a")
        button.setAttribute("class","btn btn-primary")
        button.setAttribute("onclick", `details('${slug}')`)
        button.innerText = "Details"
        cbody.appendChild(button)
        cdiv.appendChild(cbody)
        container.appendChild(cdiv)
        div.appendChild(container)

 }
}catch(error){
    console.log(error)
}
}

processCountry();
async function details(slug){
    let data = await fetch(`https://api.covid19api.com/country/${slug}?from=2020-07-01T00:00:00Z&to=2020-07-02T00:00:00Z`)
    let result = await data.json()
    let str = ""
    for(each of result){
        str += "Confirmed : " + each["Confirmed"] + "Deaths : " + each["Deaths"] + "Recovered : " + each["Recovered"] + "Active : " + each["Active"] +  "\n"
    }
    alert(str);
}