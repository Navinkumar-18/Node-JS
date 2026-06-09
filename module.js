const names=require('./one');
const sayHi=require('./two');
(require('./mind_grenade'));

sayHi(names.john);
sayHi(names.peter);
console.log(names);
