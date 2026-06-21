const http=require('http');

const app  =http.createServer((req,res)=>{
  if(req.url ==='/'){
    return res.end(`Welcome to Home page`);
  }
  if(req.url ==='/about'){
    return res.end(`Welcome to about page`);
  }
  return res.end(`<h1 >Page not found</h1>`);
  
});

app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000/");
});