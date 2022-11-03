"use strict";

var express = require("express") /* npm install express */
var XLSX = require('xlsx');
const app = express();
const PORT = process.env.PORT || 3001;

const axios = require('axios');
const puppeteer = require('puppeteer');



app.get('/prix', function(request, response){
    const codeInsee = request.query.codeInsee;

    const file = XLSX.readFile('/Applications/MAMP/htdocs/open_data/Lisa/dvf-communes-2019.xlsx')

    const files = file.SheetNames //Récupération des noms de feuilles du fichier excel : ici nous n'en n'avons qu'une seule mais je n'ai pas trouvée le moyen de faire autrement

    const insee = file.Sheets[files[0]]; //Récupération de la première et unique feuille du fichier excel pour pouvoir parser les données.


    var tab = 2 //Là où les observations du fichier excel commencent
    var nb = insee.length // taille du fichier excel

    var tableau = []
        //Création d'une boucle qui rempli le tableau json crée avec les données dont ont à besoin.
        //On itère la boucle sur le nombre total d'observation dans le but de récupérer dans un format json les données.
    for (let i = tab; i < 5000; i++) {
        var json1 = {}; // Création d'une variable au format json
    // json1['ID'] = insee['A' + i]["v"]; // On créer un tableau json vide en récupérant comme identifiant de chaque tableau : le code insee. Création d'un identifiant unique.
        json1['CODE_INSEE'] = insee['B' + i]["v"]; // On rempli le tableau json de la ligne i avec l'observation du bureau de vote,
       // json1['INSEE_DEP'] = insee['C' + i]["v"]; // avec le nom des départements,
       // json1['INSEE_REG'] = insee['D' + i]["v"]; // avec le nb d'inscrit,
     //   json1['CODE_EPCI'] = insee['E' + i]; // avec le nb de votants,
        json1['NOM_COMMUNE'] = insee['F' + i]["v"]; // avec le % de votes de Marine Lepen,
        json1['POPULATION'] = insee['G' + i]["v"]; // avec le  % de votes de Macron,
        json1['NB_VENTES'] = insee['H' + i]["v"]; // avec le  % de votes de Hamon,
        json1['PRIX_MOYEN_M2'] = insee['I' + i]["v"]; // avec le  % de votes de Arthaud,
        

        
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