const Pessoa = require("../models/Pessoa");
const Professor = require("../models/Professor");
const Usuario = require("../models/Usuario");

module.exports = {
  async index(req, res) {
    const { id_professor } = req.params;
    const professor = await Professor.findByPk(id_professor, {
      include: {
        association: "pessoa", // TODO: buscar uma forma de associar "usuario" junto
      },
    });

    return res.json(professor);
  },

  async getAll(req, res) {
    const professores = await Professor.findAll();
    return res.json(professores);
  },

  // TODO: Não permitir a criação de pessoa ou usuário caso dê algum erro subsequente
  async store(req, res) {
    const {
      nome,
      email,
      data_nascimento,
      descricao,
      formacao,
      nome_usuario,
      senha,
    } = req.body;

    const pessoa = await Pessoa.create({
      nome,
      email,
      data_nascimento,
      descricao,
      formacao,
    });

    const usuario = await Usuario.create({ nome_usuario, senha });
    const professor = await Professor.create({
      id_pessoa: pessoa.id,
      id_usuario: usuario.id,
    });

    return res.json(professor);
  },

  async update(req, res) {
    const { id_professor } = req.params;
    const {
      nome,
      email,
      data_nascimento,
      descricao,
      formacao,
      nome_usuario,
      senha,
    } = req.body;
    const professor = await Professor.findByPk(id_professor);
    const usuario = await Usuario.findByPk(professor.id_usuario);
    const pessoa = await Pessoa.findByPk(professor.id_pessoa);
    usuario.nome_usuario = nome_usuario;
    usuario.senha = senha;

    pessoa.nome = nome;
    pessoa.email = email;
    pessoa.data_nascimento = data_nascimento;
    pessoa.descricao = descricao;
    pessoa.formacao = formacao;

    pessoa.save();
    usuario.save();

    return res.json(professor);
  },
  async delete(req, res) {
    const { id_professor } = req.params;
    const professor = await Professor.findByPk(id_professor);

    professor.destroy();

    return res.json("Exclusão realizada com sucesso!");
  },
};
