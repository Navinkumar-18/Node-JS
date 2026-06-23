const {createReadStream}=require('fs');
 
const stream=createReadStream('./lime/streams/big.txt',{
    highWaterMark:90000,
    encoding:'utf8'
}
);

stream.on('request',(result)=>{
    console.log(result);
})

stream.on('error',(err)=>{
  console.log(err);
})
