import api from "./api.js";

const ui = {
    async renderizarTarefa(){
        const listTarefas = document.getElementById('list-tarefas');

        try {
            const tarefa = await api.obterTarefa();
            tarefa.forEach(ui.adicionarElements)
        } catch (error) {
            alert("Falha ao renderizar api")
            throw error;
            
        }

    },

    adicionarElements(tarefa){
        const listTarefas = document.getElementById('list-tarefas');
        const li = document.createElement('li')
        li.setAttribute('data-id', tarefa.id);

        const span = document.createElement('span');
        span.innerText = tarefa.titulo;

        const p = document.createElement('p');
        p.innerText = tarefa.descricao;

        const div = document.createElement('div')
        

    }
}

export default ui

