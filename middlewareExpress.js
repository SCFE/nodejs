'use strict'
var express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session')


app
// .use(cookieParser())
    .use(cookieSession({ secret: "secreto" }))

.get('/', (req, res) => {

        req.session.visitas || (req.session.visitas = 0)

        let n = req.session.visitas++
            res.end(`<h1>HOLA ERES LA VISITA NUMERO ${n} </h1>`)
    })
    .get('/usuario/:id-:nombre-:edad', (req, res) => {
        res.end(`<h1>hola</h1>`)
    })
    .listen(4000)

console.log('up server 4000')