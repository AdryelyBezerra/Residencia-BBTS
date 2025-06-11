const conexao = require("../infraestrutura/conexao");
class vagaModel {
    listar(){
        const sql = "SELECT * FROM usuario";
        return new Promise((resolve, reject) => {
        conexao.query(sql, [], (error, resposta) =>{
            if(error){
                console.log("Deu erro no listar");
                return reject(error);
            }
            console.log("rodou");
            resolve(resposta);
        });
    });
        } 
    }

module.exports = new vagaModel();