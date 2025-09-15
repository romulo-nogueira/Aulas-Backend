require('dotenv').config();
const express = require('express');
const  routes = require('./routes/routes.js');
const server = require('./routes/server.js');


const app = express();
app.use(express.json());

app.use(routes);
app.use(server);

const porta = process.env.PORTA;

app.listen(porta,()=> console.log(`Servidor no end: http://localhost:${porta}`));
