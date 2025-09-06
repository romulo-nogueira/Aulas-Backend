const express = require('express');

const routes = express.Router();

// Construindo array de armazenamento de dados

const filme = [];


// criando dados do filme

routes.post('/filmes', (req, res) => {
   /* const id = req.body.id;  --- caso feito assim deveria fazer de 1 por 1 */

   const {id, titulo, ano, categoria} = req.body;
   filme.push({id, titulo, ano, categoria});
   res.status(201).send("Filme adicionado com sucesso! ")
})

routes.get('/fimes/cadastrados', (req, res) =>{
       
    res.json(filme);
    res.status(200).send("Filme visualizado com sucesso! ")
})

export default routes;