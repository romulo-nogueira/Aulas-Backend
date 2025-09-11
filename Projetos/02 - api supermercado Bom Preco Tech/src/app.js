require('dotenv').config();
const express =  require('express');
const { default: routes } = require('./routes/routes.js');
const { default: server } = require('./routes/server.js');

const app = express();
app.use(express.json());

app.use(routes);
app.use(server);

const porta = process.env.PORTA;

app.listen(porta,()=> console.log(`servidor no end: http://localhost:${porta}`));