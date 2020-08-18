var promise=new Promise(function(resolve,reject){
    var request = new XMLHttpRequest()
    var url_string = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
    request.open('GET',url_string , true)
    request.send();
    request.onload = function() {
      
    if(this.response)
    resolve(JSON.parse(this.response));
    else
    reject(err)
    }})
    promise
    .then(function(data){
       
            for(let i=0;i<data.length;i++)
            {
                var div=document.createElement("div")
                div.setAttribute("class","card")
                div.setAttribute("style","width:18rem;background-color:beige")
                document.getElementById("div").appendChild(div)
                var img=document.createElement("img")
                img.setAttribute("class","card-img-top")
                img.setAttribute("style","width:100%;height:180px")
                var url=(data[i].flag)
                img.setAttribute("src",url)
                div.appendChild(img)
                var carddiv=document.createElement("div")
                carddiv.setAttribute("class","card-body")
                div.appendChild(carddiv)
                var h5=document.createElement("h5")
                h5.setAttribute("class","card-title")
                h5.innerText=data[i].name
                carddiv.appendChild(h5)
                var p=document.createElement("p")
                p.setAttribute("class","card-text")
                p.innerText="Capital : "+data[i].capital+"\n Region : "+data[i].region+"\n Currency Code : "+data[i].currencies[0].code+"\nCurrency symbol : "+data[i].currencies[0].symbol+"\nCurrency name : "+data[i].currencies[0].name+"\nlat,lng : ["+data[i].latlng+"]"            
                carddiv.appendChild(p)
            }
    
    
    
    })
    .catch(function(){
        console.log("error")
    })
    