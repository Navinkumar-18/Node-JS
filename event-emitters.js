const EventEmitter=require('events');

const customEmitter=new EventEmitter();

customEmitter.on('response',(name ,age)=>{
    console.log(`data received  with user : ${name}  with age :${age}`);
});

customEmitter.emit('response','Naruto',19);