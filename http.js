/*
const http = require('http')
const server = http.createServer((req,res)=>{
   console.log(req);
   res.write('Welcome Amin Amgad');
   res.end()
})
server.listen(5000)*/

const http = require('http')
const server = http.createServer((req,res)=>{
   if (req.url === '/') {
      res.end('Welcome Abdlgafour Elboray')
   }
   else if (req.url === '/about') {
      res.end('My name is Amin Amgad')   
   }
   else if(req.url==='/break') {
      res.destroy()
   }
   else if (req.url === '/home'){
      res.write('Welocome , This is a Home Page');
      res.end()
   }
  else{ res.end(`<div style="background:#333;min-height:100vh;margin:0;padding:0;"><h1 style="color: red;">Oops!</h1>
   <p>We can't hear you</p>
   <a href="/" style="color:#fff;   text-decoration: none;"> Back a Home</a></div>`)}
})

server.listen(5000)
