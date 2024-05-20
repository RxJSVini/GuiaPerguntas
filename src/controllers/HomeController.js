const Pergunta = require('../database/Pergunta');

class HomeController {
  async index(req, res) {
    await Pergunta.findAll({
      raw: true, order: [
        ['id', 'DESC'] // asc = crescente || DESC = decrescente
      ]
    })
      .then(pergunta => {
        return res.render('dados/index', { title: 'Formação Nodejs', perguntas: pergunta });
      })
      .catch((error) => {
        console.log(error);
      })
    return res.render({ message: 'Perguntas não encontradas' });
  }


}

module.exports = new HomeController();