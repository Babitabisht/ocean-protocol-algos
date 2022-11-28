const fs = require('fs')

const inputFolder = '/data/inputs'
const outputFolder = '/data/outputs'


async function countrows( file) {
 
  let data = await fs.promises.readFile(file, 'utf8')
  data = JSON.parse(data);
  let result; 
  if(Array.isArray(data)&& data.length>0){
    result = data.map( item => {
        return item.email;
    } );
  }
  console.log('Finished. We have this data  ' + result )
  fs.appendFileSync(outputFolder + '/output.log', file + ',' + result + '\r\n' )
}

async function processfolder(folder) {
  const files = fs.readdirSync(folder)
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const fullpath = folder + '/' + file;

   
    if (fs.statSync(fullpath).isDirectory()) {
      await processfolder(fullpath)
    } else {
      await countrows( fullpath)
    }
  }
}


processfolder(inputFolder)
