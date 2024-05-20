class CadastroController {
  async index(req, res) {
    return res.render('pergunta', { 'title': 'Formação Nodejs' });
  }
}
module.exports = new CadastroController();