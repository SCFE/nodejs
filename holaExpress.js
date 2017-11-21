'use strict'
var express = require('express'),
    app = express();



app
    .get('/', (req, res)=>{
        res.end('<h1>HOLA CON EXPRESS</h1>')
    })
    .get('/redireccion', (req,res)=>{
        res.redirect(301,'https://www.google.com.gt')
    })
    .get('/json', (req,res)=>{
        res.json({
            nombre : "Edgar",
            edad: 25,
            email : "3dg1992@gmail.com"
        })
    })
    .get('/render',(req,res)=>{
        res.render('assets/hola.html')
    })
    .get('/usuario/:nombre-:edad-:id',(req,res)=>{
        res.send(`<h1>Hola ${req.params.nombre} Bienvenido a Express tu edad es ${req.params.edad} y tu ID es ${req.params.id} </h1>`)
    })
    .get('/buscar', (req,res)=>{
        res.send(`<h1>El resultados de su busqueda es <mark>${req.query.s}</mark> </h1>`)
    })
    .listen(3000)
    console.log('SERVIDOR CORRIENDO EN PUERTO 3000')