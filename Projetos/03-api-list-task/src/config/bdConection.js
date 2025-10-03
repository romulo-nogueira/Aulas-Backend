import mongoose from "mongoose";
const conexao = process.env.BD_CONNECT

async function conectarBanco() {
    try {
        await mongoose.connect(conexao);
        console.log("Sucesso! Conexão estabelecida com o banco.")
        return mongoose.connect
    } catch (error) {
        console.error("Erro na conexão com o banco:", error)
        throw error
    }
    
}

export default conectarBanco;