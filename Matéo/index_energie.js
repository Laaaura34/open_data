"use strict";

var express = require("express") /* npm install express */
var XLSX = require('xlsx');
const app = express();
const PORT = process.env.PORT || 3001;
const axios = require('axios');
const puppeteer = require('puppeteer');

//const swaggerUi = require('swagger-ui-express'),
//swaggerDocument = require('./swagger.json');



app.get('/energie', function(request, response){
    const code_insee = request.query.code_insee;

    const file = XLSX.readFile('conso_energie.xlsx')
    const files = file.SheetNames //Récupération des noms de feuilles du fichier excel : ici nous n'en n'avons qu'une seule
    const insee = file.Sheets[files[0]]; //Récupération de la première et unique feuille du fichier excel pour pouvoir parser les données.


    var tab = 2 //Là où les observations du fichier excel commencent
    var nb = insee.length // taille du fichier excel

    var tableau = []
        //Création d'une boucle qui rempli le tableau json crée avec les données dont ont à besoin.
        //On itère la boucle sur le nombre total d'observation dans le but de récupérer dans un format json les données.
    for (let i = tab; i < 5000; i++) {
        var json1 = {}; // Création d'une variable au format json
        json1['code_insee'] = insee['A' + i]['v']; // On créer un tableau json vide en récupérant comme identifiant de chaque tableau : le code insee. Création d'un identifiant unique.
        json1['code_postal'] = insee['B' + i]['v']; // On rempli le tableau json de la ligne i avec l'observation du bureau de vote,
        json1['commune'] = insee['C' + i]['v']; // avec le nom des départements,
        json1['conso_totale'] = insee['D' + i]['v']; // avec le nb d'inscrit,

        if (json1['code_insee'] == code_insee) tableau = [...tableau, json1]
        else {
            if (code_insee == null) tableau = [...tableau, json1]
        }
    }
    response.send(tableau); // Affichage du tableau au format json

})

/*
app.get('/join', function(req, response){
	var tableau = vote_f();
	comm_f().then(function(data){
		const arr1 = [...data];
		const arr2 = [...tableau]
		const a3 = arr1.map(t1 => ({...t1, ...arr2.find(t2 => t2.code_insee === t1.code_insee)}))
		response.send(a3);
		
	})
})
*/

/*
app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );
*/

app.listen(PORT, function(){
	console.log('Bienvenue sur le port :'+ PORT);
})