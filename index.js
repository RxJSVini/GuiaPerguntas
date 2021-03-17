const express = require('express');
const ejs = require('ejs');
const app = express();
const routes = require('./src/routes');
const bodyParser = require('body-parser');
const connection = require('./src/database/database');

connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados!");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });


//Setando a templage engine do projeto
app.set('view engine', 'ejs');
//Setando pasta de arquivos estáticos
app.use(express.static('public'));

//Configurando Body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
//Setando as rotas
app.use(routes);


app.listen(3000, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Servidor Nodejs UP');
  }
})