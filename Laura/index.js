"use strict";

var express = require("express") /* npm install express */
var XLSX = require('xlsx');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', function(request, response){
    const codeInsee = request.query.codeInsee;
    const file = XLSX.readFile('./data/covoit.xlsx')

    const files = file.SheetNames //Récupération des noms de feuilles du fichier excel : ici nous n'en n'avons qu'une seule mais je n'ai pas trouvée le moyen de faire autrement

    const covoit = file.Sheets[files[0]]; //Récupération de la première et unique feuille du fichier excel pour pouvoir parser les données.

    var tab = 2 //Là où les observations du fichier excel commencent
    var nb = covoit.length // taille du fichier excel

    var tableau = []
        //Création d'une boucle qui rempli le tableau json crée avec les données dont ont à besoin.
        //On itère la boucle sur le nombre total d'observation dans le but de récupérer dans un format json les données.
    for (let i = tab; i < 1000; i++) {
        var json1 = {}; // Création d'une variable au format json
		json1['insee'] = covoit['B' + i]['v']; 
		json1['com_lieu'] = covoit['A' + i]['v']; 
		json1['type'] = covoit['C' + i]['v'];
		json1['Xlong'] = covoit['D' + i]['v']; 
		json1['Xlat'] = covoit['E' + i]['v']; 

        if (json1['codeInsee'] == codeInsee) tableau = [...tableau, json1]
        else {
            if (codeInsee == null) tableau = [...tableau, json1]
        }
    }
    response.send(tableau); // Affichage du tableau au format json

})

app.listen(PORT, function(){
	console.log('Bienvenu sur le port :'+ PORT);
})