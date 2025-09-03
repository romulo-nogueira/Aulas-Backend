const express = require('express');

export const routes = express.Router();


//Rotas para Obter dados

routes.get('/contatos', (req, res) =>{
    const mensage = "Página de contatos"
    res.status(200).send(mensage)
});

routes.get('/contatos/dados', (req, res) =>{
    const dados = {
        nome:"Goku",
        idade:47,
        profissao:"Super Sayajin",

    }

    res.json(dados);
})