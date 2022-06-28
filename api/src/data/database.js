var sqlite3 = require("sqlite3").verbose();

DBSOURCE = "./college.db";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Conectado no banco SQLite college.");
    const tabelas = [``,
      
    ];

    tabelas.forEach((tabela) => {
      db.run(tabela, (err) => {
        if (err) {
          console.log("Tabela já existe");
        } else {
          // var insert = 'INSERT INTO IMAGENS (CODIGODEBARRAS, DESCRICAO, IMAGEM) VALUES (?,?,?)'
          // db.run(insert, ["Teste","teste2", "teste3"]);
          // var insert = 'INSERT INTO IMAGENS (CODIGODEBARRAS, DESCRICAO, IMAGEM) VALUES (?,?,?)'
          // db.run(insert, ["Teste1","teste12", "teste13"]);
          // var insert = 'INSERT INTO IMAGENS (CODIGODEBARRAS, DESCRICAO, IMAGEM) VALUES (?,?,?)'
          // db.run(insert, ["Teste2","teste22", "teste23"]);
          console.log('Tabela criada');
        }
      });
    });
  }
});

module.exports = db;