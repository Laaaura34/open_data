const XLSX = require('xlsx');
const fs = require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'villes_transports');


console.log(dirPath)

fs.readdir(dirPath,(err,villes_transports)=>{

  const villes =[];
  const totaux =[];
  villes_transports.forEach((item) => {
      console.warn("FILE NAME IS : ",item)

      //const fichier = fs.readFileSync(item);
      //const lines = []; 
      nom_ville = item.split(".")[0];
      if (nom_ville!=""){
        villes.push(nom_ville);
      }
      
      const content = fs.readFileSync("./villes_transports/"+ item).toString();
    
      total= (content.split("\n").length)-1;

      if(total!=0){
        totaux.push(total);
      }
  });
  console.log("villes :", villes);
  console.log("Total_transports :", totaux);

const villes_totaux = [];

for (let index=0; index<villes.length;index+=1){

  villes_totaux.push({
    Nom_ville: villes[index],
    Total_transports_disponibles: totaux[index]
  })
}

fs.writeFileSync("villes_totaux.json",JSON.stringify(villes_totaux))

console.log(villes_totaux.json);
})


