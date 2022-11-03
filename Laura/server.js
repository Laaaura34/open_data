let express = require('express');
let bodyParser = require("body-parser");
const PORT = process.env.PORT || 3002;

 
// serveur html
let server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.listen(80);
 
server.get('/page.html', function(request, response) {
  response.sendFile( __dirname  + '/page.html');
});
 
server.post('/page.html', function(request, response) {
  let p1 = request.body.p1; 
  console.log("p1=" + p1);
});

server.listen(PORT, function(){
	console.log('Bienvenu sur le port :'+ PORT);
})