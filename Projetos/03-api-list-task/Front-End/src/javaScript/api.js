

const api = {

    async obterTarefa() {
        try {
            const response = await fetch('http://localhost:3000');
            return await response.json();
        } catch (error) {
            alert("Erro ao fazer requisição");
            throw error;
        }
    },

    async adicionarTarefa(tarefa) {
        try {
            const response = await fetch('http://localhost:3000', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(tarefa)
            });
            return await response.json()
        } catch (error) {
            alert("Erro ao cadastrar nova tarefa");
            throw error;
        }

    },

    //Atualizando dos dados

    // 1 passo -  buscando o id
    async buscarId(id) {
        try {
            const response = await fetch(`http://localhost:3000/tarefa/${id}`);
            return await response.json();

        } catch (error) {
            alert("Falha ao buscar ID");
            throw error;
        }
    },

    // 2 passo - atulizando os dados

    async atualizarTarefa(tarefa) {
        try {
            const response = await fetch(`http://localhost:3000/tarefa/${tarefa.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(tarefa)
            });
            return await response.json()
        } catch (error) {
            alert("Erro ao efetuar a atualização da tarefa");
            throw error;
        }
    },

    // Deletando tarefa

    async deletarTarefa(id) {
        try {
            const response = await fetch(`http://localhost:3000/tarefa/${id}`, {
                method: "DELETE"
            })
            return await response.json()
        } catch (error) {
            alert("Erro ao deletar tarefa")
            throw error
        }
    }
}

export default api
