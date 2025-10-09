import 'dotenv/config';
import express from 'express';
import routes from './routes/index.js';
import conectarBanco from './config/bdConection.js';
import cors from 'cors';


const app = express();
/* const cors = require("cors") */

app.use (cors());

app.use(express.json());
app.set('json spaces', 2);
routes(app);

//Chamando conexão com o banco
await conectarBanco();


const porta = process.env.PORTA;
const end = process.env.END;

app.listen(porta, ()=>console.log(`End: ${end}:${porta}`));
