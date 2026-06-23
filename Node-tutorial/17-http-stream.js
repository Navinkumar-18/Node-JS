var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
//   const text= fs.readFileSync('./lime/streams/big.txt','utf8');
//   res.end(text);
 const fileStream =fs.createReadStream('./lime/streams/big.txt','utf8');
 fileStream.on('open',()=>{
  fileStream.pipe(res);
 })
  
 fileStream.on('error',(err)=>{
res.end(err);
 })
}).listen(5000,()=>{
    console.log("Server is running at port 5000");
});