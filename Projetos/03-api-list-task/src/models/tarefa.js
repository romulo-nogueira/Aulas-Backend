import mongoose from 'mongoose';

// schema
const tarefaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String},
    descricao: {type: String}
}, {versionKey: false})

// Modelo (model)
const tarefa = mongoose.model("tarefas", tarefaSchema);

export default tarefa;