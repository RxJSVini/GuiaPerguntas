class CadastroController {
  async index(req, res) {
    return res.render('pergunta.ejs', { 'title': 'Formação Nodejs' });
  }
}
module.exports = new CadastroController();