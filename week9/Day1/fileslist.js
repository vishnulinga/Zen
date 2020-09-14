var http = require('http');
const fs = require('fs');
var str="<ul>" 

fs.readdir('E:/myrepo/Zen', (err, files) => { 
    if (err) 
      console.log(err); 
    else { 
       
      files.forEach(file => { 
      if(file.split(".").length==1)   
        str+="<li style='color:green'>"+file+"</li>"
      else
      str+="<li style='color:red'>"+file+"</li>"
     
    
    }
    
    )
    } str+="</ul>"; 
  }) 

  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<h1>${str}</h1>`);
    res.end();
  }).listen(8080);