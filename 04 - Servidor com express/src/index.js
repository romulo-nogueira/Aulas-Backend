const express = require('express');

// Criando Servidor
const app = express();

const port = 3000;

app.listen(port, () => console.log(`Servidor rodando no end: http://localhost:${port} `));