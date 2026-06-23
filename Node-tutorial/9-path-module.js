const path=require('path');
console.log(path.sep);

const filepath=path.join('/lime','sublime','test');
console.log(filepath);

const base=path.basename(filepath);
console.log(base);

const absolute=path.resolve(__dirname,'lime','sublime','test');
console.log(absolute);

