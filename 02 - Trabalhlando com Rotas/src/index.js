const http = require('http');


const app = http.createServer((req, res) =>{
    req.url ==='/'
    res.writeHead(200,{'content-type':'text/plain'})
    res.end('Bem vindo, servidor rodando com sucesso!')

})

let PORTA = 3000;

app.listen(PORTA, ()=> console.log(`Servidor rodando no end: http://localhost:${PORTA} `));