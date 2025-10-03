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
    const produto = produtos.find(item => item.id === id);

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
        produtosFiltrados = produtosFiltrados.filter(item => item.categoria.toLowerCase() === categoria.toLowerCase());
    }
    // Filtra por nome
   if(nome){
    produtosFiltrados = produtosFiltrados.filter(item => item.nome.toLowerCase() === nome.toLowerCase());
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

    //Validação de campos obrigatorios
    if(!id || !nome || !preco || !categoria || id.toString().trim() =="" || nome.trim() == "" || preco.trim() == "" || categoria.trim() ==""){
        return res.status(400).send("Todos os campos precisam ser preenchidos")
    }

    //validação de duplicidade por ID

    const produdoExistente = produtos.find(item => item.id ==id);
    if(produdoExistente){
        return res.status(400).send("Produto já cadastrado!")
    }
    produtos.push({id:Number(id), nome:nome.trim(), preco, categoria:categoria.trim()});
    res.status(201).send("Produto cadastrado com sucesso!");
}) 

//Criando metodo de atualizacao

routes.put('/produtos/:id', (req, res) =>{
    const {id} = req.params;
    const {nome, preco, categoria} = req.body;
    const updadeProdutos = produtos.find(item => item.id);

    if(!updadeProdutos){
        return res.status(404).send(`Erro 404 - Produto não encontrado` )
    }
    if(!nome || nome.trim() === ""){
        res.status(400).send('Produto não pode ser vazio')
        return res.status(400).send('Produto não pode ser vazio');
    }
    updadeProdutos.nome = nome;
    updadeProdutos.preco = preco;
    updadeProdutos.categoria = categoria;

    res.status(200).send('Produto atualizado com sucesso!')
})

 // Rota para deletar
routes.delete('/produtos/:id', (req, res) => {
    const {id} = req.params
    const excluirProduto = produtos.findIndex(item => item.id == id)

    if(excluirProduto === -1){
        return res.status(400).send("404 - produto não encontrado" )
    }

    produtos.splice(excluirProduto, 1);
    res.status(200).send("Produto exluido com sucesso!")
})


module.exports = routes; // Perguntar para o professor hoje