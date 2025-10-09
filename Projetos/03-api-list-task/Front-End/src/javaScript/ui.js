import api from "./api.js";

const ui = {
    async renderizarTarefa() {
        const listTarefas = document.getElementById('list-tarefas');
        listTarefas.innerHTML = ""

        try {
            const tarefa = await api.obterTarefa();
            tarefa.forEach(ui.adicionarElements)
        } catch (error) {
            alert("Falha ao renderizar api")
            throw error;

        }

    },

    adicionarElements(tarefa) {
        const listTarefas = document.getElementById('list-tarefas');
        const li = document.createElement('li')
        li.setAttribute('data-id', tarefa.id);

        const checkbox = document.createElement('input')
        checkbox.type = "checkbox"

        const h3 = document.createElement('h3');
        h3.innerText = tarefa.titulo;
        h3.classList.add('task-text')

        const p = document.createElement('p');
        p.innerText = tarefa.descricao;

        const div = document.createElement('div');
        div.classList.add('actions');

        const buttonEdit = document.createElement('button');
        buttonEdit.classList.add('btn-action', 'btn-edit')
        buttonEdit.innerText = ('✎')
        buttonEdit.onclick = () => {
            ui.formEdit(tarefa.id)
        }


        // Criando botao delete
        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('btn-action', 'btn-delete');
        buttonDelete.innerText = ('🗑')
        buttonDelete.onclick = async () => {
            try {
                await api.deletarTarefa(tarefa.id);
                ui.renderizarTarefa()
            } catch (error) {
                alert("Erro ao renderizar tarefa")
            }
        }

        div.append(buttonEdit, buttonDelete)

        li.append(checkbox, h3, p, div)
        listTarefas.appendChild(li)

    },
    //Chamando formulario para controle de atualizacao
    async formEdit(tarefasId) {
        const tarefas = await api.buscarId(tarefasId);

        document.getElementById("form-id").value = tarefas.id;
        document.getElementById("titulo").value = tarefas.titulo;
        document.getElementById("descricao").value = tarefas.descricao;

    }


}

export default ui

