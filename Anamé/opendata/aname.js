

"use strict";

var express = require("express") /* npm install express */
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 3001;


//---------
var  http=require( "http" );  
var server = http.createServer(function(request, response) {  
    response.writeHead(200, {  
        'Content-Type': 'text/plain'  
    });  
//     response.write("This is Test Message.");  
//     response.end();  
 });   

// var  url=require( "url" );  
// var  path=url.parse(request.url).pathname; 

// server.listen(8082);  
//---------






function train(){

    var data = []
    return axios
        .get(
            'https://data.sncf.com/api/records/1.0/search/?dataset=lignes-equipees-de-liaison-radio-sol-train&q=&rows=10000&facet=code_ligne&facet=rst'
        )
        .then(res => {
            //const code_commune_insee = request.query.code_commune_insee;

            res['data']['records'].forEach((element) => {
                const obj = {}
                obj['lib_ligne'] = element['fields']['lib_ligne']
                obj['x_f_wgs84'] = element['fields']['x_f_wgs84']
                obj['y_f_wgs84'] = element['fields']['y_f_wgs84']
                obj['coordinates'] = element['fields']['geo_shape']['coordinates']

               // if (obj['code_commune_insee'] == code_commune_insee) data = [...data, obj]
                //else {
                  //  if (code_commune_insee == null) 
                data = [...data, obj]
               // }
                


                //}
            });
            return (data);

        });
    }

    app.get('/join', function(request, response){
        train().then(function(data){
            const arr1 = [...data]
            const arr2= arr1.map(arr1 => arr1.coordinates);
            //const arr2= arr1.from(['coordinates'])
            response.send(arr2);
    })
})




  app.listen(PORT, function(){
	console.log('Bienvenu sur le port :'+ PORT);
})
