const {createReadStream}=require('fs');
 
const stream=createReadStream('./lime/streams/big.txt');

stream.on('request',(result)=>{
    console.log(result);
})

