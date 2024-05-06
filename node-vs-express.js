// NODE JS-----------------------
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end("Node Home page")
    }
    else if (req.url == '/about') {
        res.end("Node About page")
    }
})

server.listen(5000, () => {
    console.log(">> server start over 5000")
})

// EXPRESS JS-----------------------------

const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send("Express Home page")
})
app.get('/about', (req, res) => {
    res.send("Express About Page")
})
app.listen(5100,()=>{
    console.log(">> server start over 5000")
})