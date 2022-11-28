const fs = require('fs')

const inputFolder = '/data/inputs/'
const outputFolder = '/data/outputs/'



async function processfolder(folder) {

 
      const files = fs.readdirSync(folder);
       console.log("this is the value of folder ", files);
       console.log("this is the custom file ", "."+folder+files[0]);
      const data = await fs.promises.readFile("."+folder+files[0], 'utf8')
      console.log("data---->",data);
 
      const data2 = await fs.promises.readFile("."+folder+files[1], 'utf8')
      console.log("data2---->",data2);
    
      
}

processfolder(inputFolder)
