const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/index");
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabelas");

tabelas.init(conexao);

router(app);

app.listen(port, (error) => {
    if(error){
        console.log("Errou");
        return;
    }
    console.log("Tudo normal");
});