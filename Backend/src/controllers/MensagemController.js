const Agendamento = require("../models/Agendamento");
const Mensagem = require("../models/Mensagem");
const Pessoa = require("../models/Pessoa");

module.exports = {
  async index(req, res) {
    const { id_agendamento } = req.params;
    const mensagens = await Mensagem.findAll({
      where: {
        id_agendamento: id_agendamento,
      },
    });
    return res.json(mensagens);
  },

  async store(req, res) {
    const { id_agendamento } = req.params;
    const { id_pessoa, texto } = req.body;

    const agendamento = await Agendamento.findByPk(id_agendamento);

    if (!agendamento) {
      return res.status(400).json({ error: "Agendamento não encontrado!" });
    }
    const pessoa = await Pessoa.findByPk(id_pessoa);

    if (!pessoa) {
      return res.status(400).json({ error: "Pessoa não encontrada!" });
    }
    const mensagem = await Mensagem.create({
      id_agendamento,
      id_pessoa,
      texto,
    });
    return res.json(mensagem);
  },
};
