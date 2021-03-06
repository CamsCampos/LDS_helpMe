const Pessoa = require("../models/Pessoa");
const Aluno = require("../models/Aluno");
const Usuario = require("../models/Usuario");
const Permissao = require("../models/Permissao");

module.exports = {
  async index(req, res) {
    const { id_aluno } = req.params;

    const aluno = await Aluno.findByPk(id_aluno, {
      include: [
        {
          model: Usuario,
          as: "usuario",
        },
        {
          model: Pessoa,
          as: "pessoa",
        },
      ],
    });

    if (!aluno) {
      return res.status(400).json({ error: "Aluno não encontrado!" });
    }

    return res.json(aluno);
  },

  async getAll(req, res) {
    const alunos = await Aluno.findAll({
      include: [
        {
          model: Usuario,
          as: "usuario",
        },
        {
          model: Pessoa,
          as: "pessoa",
        },
      ],
    });
    return res.json(alunos);
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

    const usuarios = await Usuario.findOne({
      where: { nome_usuario: nome_usuario },
    });

    if (usuarios) {
      return res.status(422).json({ error: "Nome de usuário em uso" });
    }

    const usuario = await Usuario.create({ nome_usuario, senha });

    const [permissao] = await Permissao.findOrCreate({
      where: { nome: "aluno" },
    });

    await usuario.addPermissoes(permissao);

    const aluno = await Aluno.create({
      id_pessoa: pessoa.id,
      id_usuario: usuario.id,
    });

    return res.json(aluno);
  },

  async update(req, res) {
    const { id_aluno } = req.params;

    const {
      nome,
      email,
      data_nascimento,
      descricao,
      formacao,
      nome_usuario,
      senha,
    } = req.body;

    const aluno = await Aluno.findByPk(id_aluno);

    if (!aluno) {
      return res.status(400).json({ error: "Aluno não encontrado!" });
    }

    const usuario = await Usuario.findByPk(aluno.id_usuario);
    const pessoa = await Pessoa.findByPk(aluno.id_pessoa);

    const usuarios = await Usuario.findOne({
      where: { nome_usuario: nome_usuario },
    });

    if (usuarios) {
      return res.status(422).json({ error: "Nome de usuário em uso" });
    }

    usuario.update({ nome_usuario, senha });
    pessoa.update({ nome, email, data_nascimento, descricao, formacao });

    return res.json(aluno);
  },
  async delete(req, res) {
    const { id_aluno } = req.params;
    const aluno = await Aluno.findByPk(id_aluno);

    if (!aluno) {
      return res.status(400).json({ error: "Aluno não encontrado!" });
    }

    aluno.destroy();

    return res.json("Exclusão realizada com sucesso!");
  },
};
