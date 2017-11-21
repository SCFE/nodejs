'use strict'
var express = require('express'),
    app = express(),
    cookieParser =  require('cookie-parser'),
    cookieSession = require('cookie-session')

app
    .use(cookieParser() )
    .use(cookieSession({secret: "secreto"}) )    

app
    .get('/',(req,res)=>{
        res.end('<h1>HOLA</h1>')
    })
    .listen(3000)

    console.log('up server 3000')
