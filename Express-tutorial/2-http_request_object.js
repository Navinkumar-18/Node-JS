const http=require('http');

const server=http.createServer((req,res)=>{
    
    if(req.url==='/' &&req.method=="GET"){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("<h1>Welcome to  Home Page</h1> <p>this is the home page</p>");
    res.end();}else if(req.url ==='/about' && req.method=="GET"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>About Page');
        res.end();
    }else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write("<h1>Error 404 page not found</h1>");
        res.end();
    }
   
})

server.listen(3000);