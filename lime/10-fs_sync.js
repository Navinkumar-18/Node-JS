const {readFileSync,writeFileSync} = require('fs');

const first= readFileSync('./lime/first.txt','utf8');
const second=readFileSync('./lime/second.txt','utf8');
console.log(first,second);

writeFileSync(
    './lime/result-sync.txt',
    `Here the result : ${first} , ${second}`,
    //append 
    {flag:'a'}

)