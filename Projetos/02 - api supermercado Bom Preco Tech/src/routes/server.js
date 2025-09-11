    const express = require('express');

    const server = express.Router();

    server.get('/', (req, res) =>{
        const mensage = "Servidor do PROJETO 2 rodando com sucesso";
        res.status(200).send(mensage)
    })
    server.use((req, res)=>{
        const mensage = "Erro 404 - Servidor não encontrado"
        res.status(404).send(mensage)
    })

  /*   export default server; */
  module.exports = server; // Perguntar para o professor hoje