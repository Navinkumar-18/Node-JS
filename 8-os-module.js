const os=require('os');

//info about current user
const user=os.userInfo();
console.log(user);

//method that returns the system uptime in seconds
 console.log(`System uptime is ${os.uptime()} seconds`);

//current os
const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs);