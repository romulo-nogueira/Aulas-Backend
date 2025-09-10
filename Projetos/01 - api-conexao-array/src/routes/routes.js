const express = require('express');

const routes = express.Router();

// Construindo array de armazenamento de dados

const filmes = [];

routes.get('/filmes', (req, res) =>{
       
    res.json(filmes);
    res.status(200).send("Filme visualizado com sucesso! ")
})

routes.get('/filmes/:id', (req, res) => {
    const id = req.params.id;
    // O find tem a lógica de procurar o primeiro elemento que satisfaça a condição
    const filme = filmes.find(item => item.id == id);

    if(!filme){
        return res.status(404).send("Erro 404 - Filme não encontrado")
    }

    res.status(200).send(` O filme encontrado foi: ${filme.id} - ${filme.titulo} `)
})

// criando dados do filme

routes.post('/filmes', (req, res) => {
   /* const id = req.body.id;  --- caso feito assim deveria fazer de 1 por 1 */

   const {id, titulo, ano, categoria} = req.body;

   //Validação de campos Obrigatorios

   if(!id || !titulo || !ano || !categoria || id.toString().trim() == "" || titulo.trim() == "" || ano.toString().trim() == "" || categoria.trim() == ""){
        return res.status(400).send('Os campos não podem ser vazios')
   }

    

   filmes.push({id, titulo, ano, categoria});
   res.status(201).send("Filme adicionado com sucesso! ")
})

//Criando método de atualizacao

routes.put('/filmes/:id', (req, res) =>{
    /* const id = req.params.id; */ //
    const {id} = req.params
    const {titulo, ano, categoria} = req.body;
    const updateFilme = filmes.find(item => item.id);

    if(!updateFilme){
        return res.status(404).send('Erro 404 - Filme não encontrado')
    }
    if(!titulo || titulo.trim() ===""){
        res.status(400).send('Titulo não pode ser vazio')
    }

    updateFilme.titulo = titulo;
    updateFilme.ano = ano;
    updateFilme.categoria = categoria;

    res.status(200).send('Filme atualizado com sucesso!')
})

export default routes;