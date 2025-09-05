const express = require('express');
const path =  require('path');
const { routes } = require('./routes/routes');
const { service } = require('./routes/server');
const { json } = require('stream/consumers');

const app = express()

app.set('json spaces', 2);

// Inserindo arquivo estatico

app.use(express.static(path.join(__dirname,'public')))

//Rotas do Sistema

app.use(routes)

//Rotas do Servidor

app.use(service)

const port = 3000;

app.listen(port, ()=>console.log(`☁ ✔  Endereço:http://localhost:${port}`));