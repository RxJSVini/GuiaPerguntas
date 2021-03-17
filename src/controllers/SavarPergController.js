const Pergunta = require('../database/Pergunta');

class SavarPergController {
  async index(req, res) {
    await Pergunta.create({
      titulo: req.body.titulo,
      descricao: req.body.descricao
    });

    return res.redirect('/');

  }
}


module.exports = new SavarPergController();