const express = require('express');

export const routes = express.Router();

// Rotas para obter dados

routes.get('/contatos', (req, res) =>{
    const mensage = "Pagina de contatos";
    res.status(200).send(mensage)
})

routes.get('/contatos/dados', (req, res) =>{
    const dados = {
        nome:"goku",
        idade: 47,
        profissão: "Super Sayajin",
        cidade: "São Paulo"

    }
    res.json(dados);
})

/* Rotas Dinamicas */

//1º Paramentro de rotas

routes.get('/usuario:id', (req, res) => {
    const {id} =req.params;
    const mensage = `Você esta acessando o usuario de indentificador nº ${id}`
    res.status(201).send(mensage);
})

routes.get('/produtos', (req, res) => {
    let {categoria} = req.query;

    if(!categoria){
        categoria = "Geral"
    }

    const mensage = `Exibindo produto da categoria: ${categoria}`;
    res.status(201).send(mensage);
})


routes.get('/clientes/:nome', (req, res) =>{
    const nome ={
        nome: "Romulo Nogueira",
        idade: 36,
        altura: 1.75,
        natural: "São Luis"
    }

    res.json(nome)
})