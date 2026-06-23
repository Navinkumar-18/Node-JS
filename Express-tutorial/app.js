const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req);
    res.writeHead(200,{'content-type':'text/html'});
    res.write("<h1>Welcome to  Home Page</h1> <p>this is the home page</p>");
    res.end();
   
})

server.listen(3000);