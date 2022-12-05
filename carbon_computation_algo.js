const fs = require('fs')

const inputFolder = '/data/inputs'
const outputFolder = '/data/outputs'


async function compute( file) {
 
 console.log("file: " + file);
  let data = await fs.promises.readFile(file, 'utf8');
  data = JSON.parse(data);
 
  // removing duplicate entries
  data=Object.values(data.reduce((acc,cur)=>Object.assign(acc,{[cur.product_id]:cur}),{}));
  let result; 

  if(Array.isArray(data)&& data.length>0){
   result =
`
 Electricity consumtion : ${await roundOf(data.reduce((total,  currentItem) => total + currentItem.energy_consumed, 0 ))} kWh,
 Carbon Emission : ${await roundOf(data.reduce((total,  currentItem) => total + currentItem.carbon_emissions_tons, 0 ))} metric tons`;

  }
 
  console.log('Finished. Here is the result  ' + result )
  let finalOutput = result!=undefined? " Finished  "+
  `###################################### 
   ${result} 
   ######################################`: " ";
  fs.appendFileSync(outputFolder + '/output.log', file + ',' + finalOutput + '\r\n' );

}

async function roundOf(value){
 return  Math.round((value + Number.EPSILON) * 100) / 100;
}

async function processfolder(folder) {
  const files = fs.readdirSync(folder)
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const fullpath = folder + '/' + file;

   
    if (fs.statSync(fullpath).isDirectory()) {
      await processfolder(fullpath)
    } else {
      await compute( fullpath)
    }
  }
}


processfolder(inputFolder)
