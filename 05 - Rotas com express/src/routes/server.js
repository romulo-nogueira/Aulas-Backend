const express = require("express");

export const service = express.Router()

service.get('/', (req, res)=>{
    const mensage = "Servidor rodando com sucesso"
    res.status(200).send(mensage);
})

service.use((req, res)=>{
    const mensage = "Erro 404 - Página não encontrada. ";
    res.status(404).send(mensage);
})

/*Formatos de exportação */
//export default routes;
//export (routes);