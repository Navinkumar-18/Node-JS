const express=require('express');


const  app=express();


app.get('/',(req,res)=>{
    res.json([{
        name:"Thalapathy Vijay"
     },
    {
        name:"Thala Ajith"
    }]);
});



app.listen(3000,()=>{
    console.log("The server running on port http://localhost:3000");
});

