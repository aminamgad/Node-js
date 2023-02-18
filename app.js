//const sayHi = (name) =>{
   //const hh= module.exports
 // hh={ amin,amgad }
    //console.log(`My name is ${name}`);
    //console.log(names.n1);
    //console.log(hh);
//}
/*
const names = require('./1-intro')

const req = require('os')
const path = require('path')

//sayHi('Amin Amgad')
//const amin = 'Amin'
//const amgad = 'Amgad'
names
console.log(req.arch
);
console.log(req.uptime()
);
console.log(req.getPriority()
);
console.log(path.sep
);
console.log(path
);
console.log(path.dirname()
);
const path = require('path')
const fileName = path.join('./1-intro/','Amin' , './globals/')
console.log(fileName);

const base = path.basename(fileName)
console.log(base);

const absolute = path.resolve(__dirname,'content', 'subfolder','a,in')
console.log(absolute);
*/
//// sync 
/*
const {readFileSync , writeFileSync} = require('fs')

const first = readFileSync('./txt/first.txt' , 'utf8')
const second = readFileSync('./txt/second.txt' , 'utf8')
console.log(first,second);

writeFileSync('./txt/result-sync.txt' , 
`Here is the result : ${first}, ${second}`)
///////////////////////////////
writeFileSync('./txt/result2-sync.txt' , 
`Here is the result : ${first}, ${second}`,{flag:'a'})
const first = result

const {readFile , writeFile} = require('fs')
readFile('./txt/first.txt','hex' , (err,result)=>{
   if (err) {
      console.log(err);
      return;
   }
   const second = result
   writeFile('./txt/result-Async.txt' , 
   `Here is the result : ${first}, ${second}`,(err,result)=>{
      if (err) {
         console.log(err);
         return;
      }
      console.log(result);   
   })})
*/
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);