// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var url_string = 'https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';
// Open a new connection, using the GET request on the URL endpoint
try{
request.open('GET',url_string , true)
}
catch(ex){
log(2, "open failed with error:"+ex)}

request.send();

request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data);
}
window.onerror=function(msg,url,line)
{
log(1,msg);
return true;
}


/*fetch(url_string) // Call the fetch function passing the url of the API as a parameter
.then(res=>res.json())
.then(data=>console.log(data))
*/