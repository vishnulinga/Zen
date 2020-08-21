
async function rand(){
    const response1 = await fetch('https://random-word-api.herokuapp.com/word?number=1')
    const rand_word = await response1.json();
    
    return rand_word;
    }

    async function word(){
        let random = await rand();
       // console.log(random[0]);
        const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=O0BVeplYULJ5lMZweRIkHAVhWrntyICe&q='+random[0]+'&limit=1&offset=0&rating=g&lang=en')
        const data = await response.json();
        var result = data['data'][0]['images']['original']['url']
        console.log(result);
        return result;
        }

async function main()
{
    var link= await word()
    console.log('main'+link)
     var div=document.createElement("div")
     var img=document.createElement("img")
     img.setAttribute("src",link)
     div.appendChild(img)
     document.body.append(div)
}
main();