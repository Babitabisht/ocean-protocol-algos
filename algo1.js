const fs = require('fs')

const inputFolder = '/data/inputs/'
const outputFolder = '/data/outputs/'



async function processfolder(folder) {

 
//       const files = fs.readdirSync(folder);
//        console.log("this is the value of folder ", files);
//        console.log("this is the custom file ", "."+folder+files[0]);
      const data = await fs.promises.readFile('./data/inputs/algoCustomData.json', 'utf8')
      console.log("data---->",data);
 

    
      
}

processfolder(inputFolder)
