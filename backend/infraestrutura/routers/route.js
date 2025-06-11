const { Router } = require("express");
const router = Router();
const vagasControle = require("../controllers/controles")

//métodos get post put delete
router.get("/criarvagas", (req, res) =>{
    const listaVagas = vagasControle.buscar();
    listaVagas.then(vaga => res.status(200).json(vaga)).catch((error) => res.status(400).json(error.message))
});
router.post("/criarvagas", (req, res) =>{
    const resposta = vagasControle.criar();
    res.send(resposta);
});
router.put("/criarvagas/:id", (req, res) =>{
    const { id } = req.params
    const resposta = vagasControle.atualizar(id);
    res.send(resposta);
});
router.delete("/criarvagas/:id", (req, res) =>{
    const { id } = req.params
    const resposta = vagasControle.deletar
    (id);
    res.send(resposta);
});

module.exports = router;
