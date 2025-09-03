const express = require('express');

// Criando Servidor
const app = express();

app.get('/', (req,res)=>{
    const mensage ="Seja bem vindo!";
    res.status(200).send(mensage)

})

app.use((req, res)=>{
    const mensage = "Erro 404 - Página não encontrada"
    res.status(404).send(mensage)
})

const port = 3000;
app.listen(port, () => console.log(`☁ Endereco: http://localhost:${port} `));