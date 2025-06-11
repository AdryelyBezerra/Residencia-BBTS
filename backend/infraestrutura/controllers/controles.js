const modelos = require("../models/modelos");
class vagasControle {
    buscar (){
        return modelos.listar();
    }
    criar (novavaga){
        return modelos.criar(novavaga);
    }
    atualizar(id){
        return "Sistema atualizado" + id;
    }
    deletar(id){
        return "vaga deletada" + id;
    }
}

module.exports = new vagasControle();