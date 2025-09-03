const http = require('http');

//Criando o servidor
const server = http.createServer((req, res)=>{
    res.writeHead(200,{'content-type': 'text/plain'});
    let mensage = "Bem vindo, servidor funcionando!";
    res.end(mensage);
});

let PORTA = 3000;

server.listen(PORTA, ()=>{
    console.log(`endereço do servidor: http://localhost:${PORTA}`)})