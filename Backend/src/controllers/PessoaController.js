const Pessoa = require("../models/Pessoa");

module.exports = {
  async index(req, res) {
    const pessoas = await Pessoa.findAll();
    return res.json(pessoas);
  },
  async store(req, res) {
    const { nome, email, data_nascimento, descricao, formacao } = req.body;
    const pessoa = await Pessoa.create({
      nome,
      email,
      data_nascimento,
      descricao,
      formacao,
    });
    return res.json(pessoa);
  },
};
