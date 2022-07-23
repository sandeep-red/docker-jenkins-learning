var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')
let app = express()
app.use(bodyParser.urlencoded({ extended: false }))
// var encoded=bodyParser.urlencoded({ extended: false })
app.get('/',(req,res)=>{
    res.send("<h1>WELCOME to node js friends</h1>\
    <h2>i have a good experience with node js and react js</h2>")
})
app.listen(4000,()=>{
    console.log("listening on port 4000")
})


// http.createServer((req,res)=>{
//     // res.writeHead(200,{'content-type':'text/html'})
//     // res.end('hello world')
//     // res.write('hello warald')
//     // res.write(req.url)
//     // res.end()
//     const path = req.url

// }).listen(3000);