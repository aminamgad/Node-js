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
//const _ = require('lodash')

/*const newItems = [1,[2,[3,[5]]]]
//const newItems = _.flattenDeep(items)
console.log(`Amin is have ${newItems}`);

setInterval(() => {
   let num = 0;
   setTimeout(() => {
      console.log(`Amin is = ${num+1}`);
   }, 1000);
      num++;
}, 1000);

const http = require('http')
const server = http.createServer((req,res)=>{
   res.end('Hello , My name is Amin Amgad')
})

server.listen(5000,()=>{
   console.log(' Server is run in http://localhost:5000')
})
const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
//getText("./txt/first.txt")
  //.then((result) => console.log(result))
  //.catch((err) => {
  //  console.log(err);
  //});

const util = require('util')
const readFileProise = util.promisify(readFile)
  console.log(readFileProise);*/
/*const start = async()=>{

   try {
   const first = await getText('./txt/first.txt');
   console.log(first);

   } catch (err) {
      console.log(err);
   }
}

start()

const EventEmitter = require('events')
const custoEmitter = new EventEmitter()

custoEmitter.on('response' , ()=>{
   function nums(n1,n2) {
      return n1*n2;
   }
   console.log(`Amin is ${nums(10,50)} `);
})

custoEmitter.emit('response')


const { writeFileSync } = require('fs')
for (let i = 0; i <= 10000; i++) {
   writeFileSync('./txt/first.txt' , `Amin Amgad  \t${i}\n` , {flag:'a'})
}

const {createReadStream} = require('fs')
const stream = createReadStream('./txt/first.txt')

stream.on('data' , (result)=>{
   console.log(result);

})

const http = require('http')
const {readFileSync} = require('fs')
const homePage = readFileSync('./index.html')
const aboutPage = readFileSync('./puplic/about.html')
const server = http.createServer((req,res)=>{
   const url = req.url

if (url === '/') {
   res.writeHead(200,{'content-type' : 'text/html'})
   res.write(homePage)
   res.end()
}
else if(url === '/about'){
   res.writeHead(200,{'content-type' : 'text/html'})
   res.write(aboutPage)
   res.end()
}
else{
   res.writeHead(200,{'content-type' : 'text/html'})
   res.write('<h1>Page not found<h1>')
   res.end()
}

})

server.listen(5000,()=>{
   console.log(' Server is run in http://localhost:5000')
})


*/

//////EXPRESS//////////////////////
const {products } = require('./data')

const {readFileSync} = require('fs')
const homePage = readFileSync('./index.html')
const path = require('path')

const express = require("express");
const app = express();

const logger = (req,res,next)=>{
   const method = req.method
   const url = req.url
   const time = new Date().getFullYear()
   console.log(method, url,time);
   next()
}


app.use(express.static('./puplic'))

app.get('/json',logger,(req,res)=>{
   res.json([{name:'Amin' , id:1 , age:19},{name:'John' , age:20,id:2}])
})
app.get('/json2',logger,(req,res)=>{
   const newProducts = products.map((product)=>{
     // const name = product.name
     const {id,name,price} = product;
     return {id,name,price}
   })
   res.json(newProducts)
})

app.get('/json3/:productId',logger,(req,res)=>{
const {productId} = req.params
console.log(productId);

   const singleProduct = products.find((profuct)=> profuct.id === Number(productId))

   res.json(singleProduct)
})

app.get('/query' , logger,(req,res)=>{
   const {search,limit} = req.query
   let sortedProducts = [...products]

   if (search) {
      sortedProducts = sortedProducts.filter((product)=>{
         return product.name.startsWith(search)
      })
   }
   if (limit) {
      sortedProducts = sortedProducts.slice(0,Number(limit))
   }
   res.status(200).json(sortedProducts)

   console.log(req.query);
  // res.send('Hello WOeld')
})
app.get("/",logger, (req, res) => {
  res.status(200).send(
    '<div style="margin:0;padding:0;background:#333;height:100vh;"><h1 style="color:aqua;">Home Page</h1><a href="/json2">Products</a></div>'
  );
});
app.get("/amin",logger, (req, res) => {
  res.status(200).write(homePage);
  res.end()
});
app.get("/send", logger,(req, res) => {
  res.sendFile(path.resolve(__dirname,'./puplic/about.html'))
});

app.get('/about' , logger,(req,res)=>{
   res.status(200).send(    '<div style="margin:0;padding:0;background:#333;height:100vh;"><h1 style="color:aqua;">About Page</h1></div>'
   )
})

app.all('*',logger,(req,res)=>{
   res.status(404).send('Resource not found !')
})

app.listen(5000, () => {
  [console.log("http://localhost:5000")];
});

//app.put()
//app.get()
//app.post()
//app.delete()
//app.all()
//app.use()
//app.listen()
