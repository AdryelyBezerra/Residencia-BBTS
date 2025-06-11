class Tabelas {
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaUsuario();
    }
    criarTabelaUsuario() {
    const sql = `CREATE TABLE IF NOT EXISTS usuario (
    id_usuario int NOT NULL AUTO_INCREMENT,
    nome_usuario varchar(45) NOT NULL,
    setor varchar(45) NOT NULL,
    cargo varchar(45) NOT NULL,
    tipo_usuario enum('administrador','solicitante') NOT NULL,
    PRIMARY KEY (id_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`;
    this.conexao.query(sql, (error) => {
        if(error) {
            console.log('Erro ao criar tabela usuario');
            console.log(error.message);
            return 
        } else {
            console.log('Tabela usuario criada com sucesso');
        }
    });
    }
}
module.exports = new Tabelas();