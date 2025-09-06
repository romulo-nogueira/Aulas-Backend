const express = require('express');

const server = express.Router();

server.get('/', (req, res) =>{
    const mensage = "Servidor rodando com sucesso! "
    res.status(200).send(mensage)
})
server.use((req, res) =>{
    const mensage ="Erro 404 -  Servidor nao encontrado!"
    res.status(404).send(mensage)
})

export default server;