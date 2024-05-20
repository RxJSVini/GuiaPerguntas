const { Router } = require('express');
const Home = require('./controllers/HomeController');
const Cadastro = require('./controllers/CadastroController');
const Salvar = require('./controllers/SavarPergController');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');

const router = Router();

router.get("/", Home.index);

router.get('/pergunta', Cadastro.index);

router.post('/salvarperguntas', Salvar.index);


router.get('/perguntas/:id', (req, res) => {
  const id = req.params.id;
  Pergunta.findOne({
    where: { id: id }
  })
    .then((pergunta) => {
      if (pergunta != undefined) { //Encontrada

        Resposta.findAll({
          where: { id: pergunta.id },
          order: ['id', 'DESC']
        })
        return res.render('pergunta', { 'title': 'Formação Nodejs', pergunta: pergunta });

      } else { //Não encontrada
        return res.redirect('/')
      }
    })
})

router.post('/responder', (req, res) => {
  const corpo = req.body.corpo;
  const perguntaId = req.body.pergunta;
  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId
  })
    .then(() => {
      return res.redirect('/perguntas/' + perguntaId);
    })
})

module.exports = router;

