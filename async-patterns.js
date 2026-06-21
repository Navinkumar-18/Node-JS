
const {readFile,writeFile}= require('fs').promises

// const util=require('util');
// const readFilePromise=util.promisify(readFile);
// const writeFilePromise=util.promisify(writeFile);




const start=async()=>{
    try{
    const first= await readFile('./lime/first.txt','utf8');
    const second= await readFile('./lime/second.txt','utf8');

    await writeFile('./lime/async-pattern-ref.txt',
        `The async pattern refactor type  approach returns : ${first} \n ${second}`);

}
    catch(error){
        console.log(error);
    }
}

start();



// const path = require('path');
// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//      readFile(path,'utf8',(err,data)=>{
//     if(err){
//       reject(err);
//     }else{
//       resolve(data);
//     }
   
// })
//     })

// }

// getText('./lime/first.txt')
//  .then(result=>console.log(result))
//  .catch(err=>console.log(err));
