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

/* Rotas Dinâmicas */

//1° Parâmentro de Rotas

routes.get('/usuarios/:id', (req, res)=> {
    /* const id = req.params.id; */
    const {id} =req.params;
    const mensage = `Você esta acessando o usuario de indentificador nº ${id}`;
    res.status(201).send(mensage)
})

// 2º Query Strings

routes.get("/produtos", (req, res) =>{
    /* const categoria = req.query.categoria */
    const {categoria} = req.query;
    const mensage = `Exibindo produto da categoria: ${categoria}`;
    res.status(201).send(mensage)
})