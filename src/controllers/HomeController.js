const { render } = require('ejs');
const Pergunta = require('../database/Pergunta');

class HomeController {
  async index(req, res){
    try {

      const response = await Pergunta.findAll({
        raw: true, order: [
          ['id', 'DESC'] // asc = crescente || DESC = decrescente
        ]
      });

      if(!response || response.length == 0){
        return res.render({ message: 'Perguntas não encontradas' });
      }

      return render('dados/index', { title: 'Formação Nodejs', perguntas: {} });


    } catch (error) {
      throw new Error(error);
    }
    
  }

}




module.exports = new HomeController();