const modelos = require("../models/modelos");
class vagasControle {
    buscar (){
        return modelos.listar();
    }
    criar (){
        return "Criar vaga";
    }
    atualizar(id){
        return "Sistema atualizado" + id;
    }
    deletar(id){
        return "vaga deletada" + id;
    }
}

module.exports = new vagasControle();