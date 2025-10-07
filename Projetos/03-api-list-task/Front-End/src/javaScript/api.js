
const api ={

    async criarTarefa(){
        try {
            const response = await fetch('http://localhost/3000');
            return await response.json();
        } catch (error) {
            alert("Erro ao fazer requisição");
            throw error;
        }
},

async adicionarTarefa(){
    try {
        const response = await fetch('http://localhost/3000', {
            method: "POST",
            headers:{
                "content-type":"application.json"
            }
        });    
    } catch (error) {
        
    }
    
    }
}
