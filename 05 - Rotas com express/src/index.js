const express = require('express');
const path = require('path');
const { service } = require('./routes/server');
const { routes } = require('./routes/routes');

const app =express();

app.set('json spaces', 2);

// Inserindo arquivo estatico

app.use(express.static(path.join(__dirname,'public')))

//Rotos do sistema
app.use(routes)

//Rota servidor

app.use(service);


const port = 3000;
app.listen(port, ()=>console.log(`☁ ✔  Endereço:http://localhost:${port}`));