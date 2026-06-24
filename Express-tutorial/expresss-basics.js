const express=require('express');

const  app=express();
 
app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1>");
});
app.get('/about',(req,res)=>{
   res.send("<h1>About Page</h1>");
});

app.all('/*splash',(req,res)=>{
    res.status(404).send("<h1>Error  404 page not found</h1>");
});

app.listen(3000,()=>{
    console.log("The server running on port http://localhost:3000");
});


// app.get();
// app.post();
// app.put();
// app.delete();
// app.all();
// app.use();
// app.listen();