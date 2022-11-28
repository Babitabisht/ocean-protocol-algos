const fs = require('fs')

const inputFolder = '/data/inputs/'
const outputFolder = '/data/outputs/'



async function processfolder(folder) {

 
      const files = fs.readdirSync(folder);
       console.log("this is the value of folder ", files);
 
 
      const files2 = fs.readdirSync("./");
       console.log("this is files in current folder ", files2);
 
       const files3 = fs.readdirSync("/data");
       console.log("this is files in data folder ", files3);
      
//       const data = await fs.promises.readFile('./data/inputs/algoCustomData.json', 'utf8')
//       console.log("data---->",data);
 

    
      
}

processfolder(inputFolder)
