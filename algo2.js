const fs = require('fs')

const inputFolder = '/data/inputs'
const outputFolder = '/data/outputs'


async function compute( file) {
 
 console.log("file: " + file);
  let data = await fs.promises.readFile(file, 'utf8');
  data = JSON.parse(data);
  let result; 

  if(Array.isArray(data)&& data.length>0){
    result = 'Electricity consumtion '+ data.reduce((total,  currentItem) => total + currentItem.electricity_consumption, 0 );

  }
  console.log('Finished. We have this data  ' + result )
  let finalOutput = result!=undefined? " "+`######################################  ${result} ##################################################`: " ";
  fs.appendFileSync(outputFolder + '/output.log', file + ',' + finalOutput + '\r\n' );

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
