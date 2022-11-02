//npm install papaparse

// import.js
const Papa = require("papaparse"),
  fs = require("fs");
  
try {
  let csv = fs.readFileSync("./source.csv", "utf-8")
  let csv_json = Papa.parse(csv, {encoding: "utf-8"})
  console.log(csv_json.data);
} catch(e){
  console.error(e);
}