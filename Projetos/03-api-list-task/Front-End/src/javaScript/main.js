import api from "./api.js";
import ui from "./ui.js";

document.addEventListener('DomContentLoaded', () => {
    ui.renderizarTarefa()

    const form = document.getElementById('form');
    form.addEventListener("submit", manipularForm);

})

async function manipularForm(event) {
    event.preventDefault();

    document.getElementById("form-id").value;
    document.getElementById("titulo").value;
    document.getElementById("descricao").value;

    try {
        if(id){
            await api.atualizarTarefa({id, tarefa, decricao})
        }else{
            await api.adicionarTarefa({id, tarefa, descricao})
        }
    } catch (error) {
        alert("Erro ao adicionar nova tarefa");
        throw error
    }
}