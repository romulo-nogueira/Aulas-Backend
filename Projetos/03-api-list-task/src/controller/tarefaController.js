import tarefa from "../models/tarefa.js";

class TarefaController {
    // Dentro da classe, vamos ter os métodos (ações) vão ser as requisições

    // Exibindo tarefas
    static async exibirTarefa(req, res){
        try {
            const listTask = await tarefa.find({});
            res.status(200).json(listTask);
        } catch (error) {
            res.status(500).json({mensagem: "Erro ao buscar tarefa", error: `${error}`});
        }
    }

    //Criando tarefas

    static async CriarTarefas(req,res){
        try {
            const novaTarefa =req.body;
            const tarefas = await tarefa.create(novaTarefa);
            res.status(201).json({mensagem:"Tarefa criada com sucesso!", dados: tarefas})
        } catch (error) {
            res.status(500).json({mensage: "erro ao criar nova tarefa", erro:`${error}` })
            
        }
    }
}

export default TarefaController;