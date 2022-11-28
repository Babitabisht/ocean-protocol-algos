const fs = require('fs')

const inputFolder = '/data/inputs'
const outputFolder = '/data/outputs'



// async function processfolder(folder) {

 
//       const files = fs.readdirSync(folder);
//        console.log("this is the value of folder ", files);
 
 
//       const files2 = fs.readdirSync("./");
//        console.log("this is files in current folder ", files2);
 
//        const files3 = fs.readdirSync("/data");
//        console.log("this is files in data folder ", files3);
 
//  const files4 = fs.readdirSync("/data/inputs");
//        console.log("this is files in /data/inputs folder ", files4);
 
//  const files5 = fs.readdirSync("/data/outputs");
//        console.log("this is files in /data/outputs folder ", files5);
 
//   const files6 = fs.readdirSync("/data/transformations");
//        console.log("this is files in /data/transformations folder ", files6);
      
// //       const data = await fs.promises.readFile('./data/inputs/algoCustomData.json', 'utf8')
// //       console.log("data---->",data);     
// }

async function countrows( file) {
  console.log('Start counting for ' + file)
  const data = await fs.promises.readFile(file, 'utf8')

  console.log('Finished. We have this data ' + data )
}

async function processfolder(folder) {
  const files = fs.readdirSync(folder)
  console.log("files===>",files);
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const fullpath = folder + '/' + file;

    console.log("full path===>",fullpath);
    if (fs.statSync(fullpath).isDirectory()) {
      await processfolder(fullpath)
    } else {
      await countrows( fullpath)
    }
  }
}


processfolder(inputFolder)
