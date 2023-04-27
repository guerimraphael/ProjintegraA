const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'projetoa',
});

connection.connect(function(err) {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados');
});

connection.query("SELECT id, email, senha FROM login", function
(err, rows, fields){

  if(!err){
    console.log("Resultado: ", rows);
  }
  else{
    console.log("Erro: ");
  }

});