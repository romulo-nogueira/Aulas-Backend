import api from "./api.js";
import ui from "./ui.js";

document.addEventListener('DOMContentLoaded', () => {
    ui.renderizarTarefa();

    const form = document.getElementById('form');
    form.addEventListener("submit", manipularForm);

})

async function manipularForm(event) {
    event.preventDefault();

   const id = document.getElementById("form-id").value.trim();
    const titulo = document.getElementById("titulo").value.trim();
    const descricao = document.getElementById("descricao").value.trim();

    if(!titulo || !descricao){
        alert("Preencha todos so campos!");
        return;
    }
    try {
        if(id){
            await api.atualizarTarefa({id, titulo, descricao})
        }else{
            await api.adicionarTarefa({titulo, descricao})
        }
        await ui.renderizarTarefa()
    } catch (error) {
        console.error(  "Erro ao salvar tarefa:", error)
        alert("Erro ao adicionar nova tarefa");
        
    }
}