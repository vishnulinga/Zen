var temp=""
var monthobj={
    '1':'January',
    '2':'February',
    '3':'March',
    '4':'April',
    '5':'May',
    '6':'June',
    '7':'July',
    '8':'August',
    '9':'September',
    '10':'October',
    '11':'November',
    '12':'December'
}
async function submit(str){
    var arr=await get(str);
    
    var e = document.querySelector("#data"); 
    var child = e.lastElementChild;  
    while (child) { 
    e.removeChild(child); 
    child = e.lastElementChild; 
   }

    for(let i=1;i<arr['results'].length;i++){


    var card=document.createElement("div")
    card.setAttribute("class","card cardstyle")
    var row=document.createElement("div")
    row.setAttribute("class","row")
   
    var col=document.createElement("div")
    col.setAttribute("class","col-8")
    
    var topic=str.toUpperCase()
    var h3=document.createElement("h3")
    h3.setAttribute("style","text-align:left;font:bold;")
    h3.innerText=topic
    col.appendChild(h3)
    var title=document.createElement("div")
    title.setAttribute("class","bold titlecard")
    title.innerText=arr['results'][i]['title']
    col.appendChild(title)
    var datestr=arr['results'][i]['updated_date']
    var date=new Date(datestr)
    var month=date.getMonth()
    var day=date.getDate()
    var time=document.createElement("div")
    time.setAttribute("class","bold datecard")
    time.innerText=monthobj[month]+" "+day 
    col.appendChild(time)
    var abs=document.createElement("div")
    abs.setAttribute("class","bold abstractcard")
    abs.innerText=arr['results'][i]['abstract']
    col.appendChild(abs)
    var url=arr['results'][i]['url']
    var a=document.createElement("a")
    a.setAttribute("href",url)
    a.setAttribute("class","continuereading")
    a.innerText="Continue reading"
    col.appendChild(a)
    row.appendChild(col)

    var col=document.createElement("div")
    col.setAttribute("class","col-4")

    var img=document.createElement("img")
    img.setAttribute("class","img-fluid img-thumbnail")
    img.setAttribute("src",arr['results'][i]['multimedia'][0]['url'])
    col.appendChild(img)
    row.appendChild(col)
    card.appendChild(row)

    document.getElementById("data").appendChild(card)
    
    }

}

async function get(str){
var url=`https://api.nytimes.com/svc/topstories/v2/${str}.json?api-key=i3CCHhp8cpc0HGvcIFPFUmo9FFzZNWeK`
var response=await fetch(url)
var data=await response.json()
return data
}

