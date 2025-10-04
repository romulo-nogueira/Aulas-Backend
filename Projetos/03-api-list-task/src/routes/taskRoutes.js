import express from 'express';
import TarefaController from '../controller/tarefaController.js';

const routesTask = express.Router();

routesTask.get('/tarefas', TarefaController.exibirTarefa);
routesTask.post('/tarefas', TarefaController.CriarTarefas);
routesTask.get('/tarefas/:id', TarefaController.BuscarId);
routesTask.put('/tarefas/:id', TarefaController.AtualizarTarefa);
routesTask.delete('/tarefas/:id', TarefaController.DeletarTarefa)
export default routesTask;