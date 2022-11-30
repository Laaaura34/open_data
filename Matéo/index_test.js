"use strict";

var express = require("express") /* npm install express */
var XLSX = require('xlsx');
const app = express();
const PORT = process.env.PORT || 3000;
const axios = require('axios');
const puppeteer = require('puppeteer');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT energie.commune AS commune, velo.capacite AS capacite FROM energie JOIN velo ON energie.code_insee = energie.code_insee";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});




app.listen(PORT, function(){
	console.log('Bienvenue sur le port :'+ PORT);
})
