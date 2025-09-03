const express = require('express');
const { service } = require('./routes/server');
const { routes } = require('./routes/routes');

const app =express();

app.set('json spaces', 2);
//Rotos do sistema
app.use(routes)

//Rota servidor

app.use(service);


const port = 3000;
app.listen(port, ()=>console.log(`☁ ✔  Endereço:http://localhost:${port}`));