const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('perguntas', {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
//Scricroniza o que está em perunta com o banco de dados  e cria uma tabela.
Pergunta.sync({ force: false }).then(() => { })

module.exports = Pergunta;