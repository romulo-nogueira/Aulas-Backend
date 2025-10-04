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

    // Buscando ID

    static async BuscarId(req, res){
        try {
            const {id} =req.params;
            const tarefas = await tarefa.findById(id);
            if(!tarefas) return res.status(404).json({erro: "Id da tarefa não encontrado!"})
            res.status(200).json({mensagem: `Id encontrado: ${tarefas}`})
        } catch (error) {
            res.status(500).json({mensagem:`Falha na busca pelo ID da tarefas - ${error}`})
        }
    }

    // autalizar tarefa

    static async AtualizarTarefa(req,res){
        try {
            const {id} = req.params;
            await tarefa.findByIdAndUpdate(id, req.body);
            res.status(200).json({mensagem:"Tarefa atualizada com sucesso!" })
        } catch (error) {
            res.status(500).json({mensagem: `Erro ao atualizar tarefa - ${error}`});
        }
    }

    static async DeletarTarefa(req, res){
        try {
            const {id} = req.params;
            const deletar = await tarefa.findByIdAndDelete(id);
            if(!deletar){
                res.status(404).json({mensagem: "Tarefa não encontrada"})
            }
            res.status(200).json({mensagem: "Tarefa deletada com sucesso!"});
        } catch (error) {
             res.status(500).json({mensagem: `Erro ao deletar tarefa - ${error}`})
        }
    }
}

export default TarefaController;