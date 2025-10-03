import express from 'express';
import TarefaController from '../controller/tarefaController.js';

const routesTask = express.Router();

routesTask.get('/tarefas', TarefaController.exibirTarefa);
routesTask.post('/tarefas', TarefaController.CriarTarefas);

export default routesTask;