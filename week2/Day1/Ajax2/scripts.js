// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var url_string = 'http://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=276c3968eb3da215b88927c4280d49ae';
// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true)
request.send();
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data);
}

/*
fetch(url_string) // Call the fetch function passing the url of the API as a parameter
.then(res=>res.json())
.then(data=>console.log(data))
*/