'use strict'

var express = require('express');
var app = express();
const httprequest = require('request');


const port = process.env.PORT || 3000;

var fetch = require('node-fetch');

var code_commune = '01033';



app.get("/fetchair/shangai", function (req, res) {
    promise1.then(p => {
        
    })
})

app.listen(port, function () {

    console.log('Serveur listening on port ' + port);
})