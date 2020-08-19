let div = document.createElement("div")
div.setAttribute("style","width:100%;height:auto;")
div.setAttribute("class","card-group")
document.body.appendChild(div)

async function main(){
    try{
        let countries = await fetch('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
        let arr=await countries.json()
        console.log(arr) 
       
    for(let i=0;i<arr.length;i++){
        let out_container = document.createElement("div")
        out_container.setAttribute("style","display:flex;justify-content:center;padding:5px;")
        out_container.setAttribute("class","col-lg-4 col-sm-12")
        
        let container = document.createElement("div")
        container.setAttribute("class","row")
        container.setAttribute("style","background-color:black;color:white;font-size:20px;height:40px;width:100%;margin-left:2px;display:flex;justify-content:center;")
        container.innerText = arr[i]["name"]
        
        let cdiv = document.createElement("div")
        cdiv.setAttribute("class","card")
        cdiv.setAttribute("style","background: brown;")
        let flag = document.createElement("img")
        flag.setAttribute("class","card-img-top")
        flag.setAttribute("src",arr[i]["flag"])
        flag.setAttribute("style","width:300px;height:200px;padding:20px;")
        let cbody = document.createElement("div")
        cbody.setAttribute("class","card-body")
        
        let ccapital = document.createElement("p")
        ccapital.setAttribute("class","card-text")
        ccapital.setAttribute("style","color:white;display:flex;justify-content:center;font-size:20px;")
        ccapital.innerText = "Capital : " + arr[i]["capital"]
        cbody.appendChild(ccapital)
        
        let card_region = document.createElement("p")
        card_region.setAttribute("class","card-text")
        card_region.setAttribute("style","color:white;display:flex;justify-content:center;font-size:20px;")
        card_region.innerText = "Region : " + arr[i]["region"]
        cbody.appendChild(card_region)

        let clat = document.createElement("p")
        clat.setAttribute("class","card-text")
        clat.setAttribute("style","color:white;display:flex;justify-content:center;font-size:20px;")
        clat.innerText = "Latlng : " + arr[i]["latlng"]
        let lat = arr[i]["latlng"][0]
        let lon = arr[i]["latlng"][1]
        cbody.appendChild(clat)
        
        let ccode = document.createElement("p")
        ccode.setAttribute("class","card-text")
        ccode.setAttribute("style","color:white;display:flex;justify-content:center;font-size:20px;")
        ccode.innerHTML = "Code :" + arr[i]["cioc"]
        cbody.appendChild(ccode)

        let button = document.createElement("button")
        button.setAttribute("class", "btn btn-primary")
        button.setAttribute("onclick",`weather(${lat},${lon})`)
        button.setAttribute("style","margin-left:50px;")
        button.innerText = "Click For Weather"
        cbody.appendChild(button)
        cdiv.appendChild(container)
        cdiv.appendChild(flag)
        cdiv.appendChild(cbody)
        out_container.appendChild(cdiv)
        div.appendChild(out_container)
        
 }
}catch(error){
    console.log(error)
}
}

main();
async function weather(a,b)
      {
      	let weather= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=4b83b512b8a0c3028cf6fa4cd0a9f4c2`);
      	let data= await weather.json();
        alert("Temperature: "+data.main.temp+" Farhenheit "+"\n Description: "+ data.weather[0].description);
      }