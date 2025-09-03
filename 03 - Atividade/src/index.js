const http = require('http');
const { text } = require('stream/consumers');

const app = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": 'text/plain' });

    if (req.url === ('/')) {
        res.end('Bem vindo, servidor Principal funcionando');
    }
    if (req.url === ('/Principal')) {
        res.end('Bem vindo, servidor Principal');
    }
    else if (req.url === ('/Contatos')) {
        res.end('Bem vindo, servidor de contatos');
    }
    else if (req.url === ('/Sobre')) {
        res.end('Bem vindo, servidor Sobre');
    }
    else {
        ('Erro 404 - Pagina não encontrada');
    }
})

let PORTA = 3000;

app.listen(PORTA, () => console.log(`Servidor rodando no end: http://localhost:${PORTA} `));