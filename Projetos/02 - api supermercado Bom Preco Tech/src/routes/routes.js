const express = require('express');

const routes = express.Router();

// Array de armazenamento

const produtos =[];

routes.get('/produtos', (req, res) =>{
    res.json(produtos);
    res.status(200).send("Produto visualizado com sucesso!")
})

// Buscar produtos pelo ID

routes.get('/produtos/:id', (req, res) => {
    const {id} = req.params;
    const produto = produtos.find(item => item.id ==id);

    if(!produto){
        return res.status(404).send("Erro 404 - Produto não encontrado")
    }

    res.status(200).send(`O produto encontrado foi : ${produto.id} - ${produto.nome}`)
})

// Buscar produtos pela categoria ou nome

routes.get('/filtro', (req, res) => {
    const {nome, categoria} = req.query;
    if(!nome && !categoria){
        return res.status(404).send("Erro 404 - informe o nome ou categoria do produto")
    }
    let produtosFiltrados = produtos;

    // Filtra por categoria

    if(categoria){
        produtosFiltrados = produtosFiltrados.filter(item => item.categoria.toLowerCase() === categoria.toLocaleLowerCase());
    }
    // Filtra por nome
   if(nome){
    produtosFiltrados = produtosFiltrados.filter(item => item.nome.toLocaleLowerCase() === nome.toLocaleLowerCase());
   }

    if(produtosFiltrados.length === 0){
        return res.status(400).json("Não a produtos cadastrados")

    }
    
    res.status(200).json(produtosFiltrados);
});
 

//Criando os dados do produto

routes.post('/produtos',(req, res) => {
    let {id, nome, preco, categoria} = req.body;
    preco = Number(preco).toFixed(2);


    produtos.push({id, nome, preco, categoria});
    res.status(201).send("Produto cadastrado com sucesso!");
})  


module.exports = routes; // Perguntar para o professor hoje