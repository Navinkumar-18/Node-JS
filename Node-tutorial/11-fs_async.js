const {readFile,writeFile}=require('fs');

readFile('./lime/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;

    }
    const first=result;

    readFile('./lime/second.txt','utf8',(err,result)=>{
       if(err){
        console.log(err);
        return;
       }
       const second=result;


       writeFile('./lime/result-async.txt',
        `\n The result of  Async is ${first} , ${second}`,
        //append
        {flag :'a'},
        (err,result)=>{if(err){
            console.log(err);
            return;
        }
        console.log(result);
    }

       )
    })
})