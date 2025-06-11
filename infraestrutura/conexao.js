const mysql = require('mysql2');

const conexao = mysql.createConnection({
  host: 'localhost',
  port : 3306,
  user : 'root',
  password : 'WGiv1228#$',
  database : 'bb_sistema_vagas',
});

module.exports = conexao;