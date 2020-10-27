const Pessoa = require("../models/Pessoa");
const Professor = require("../models/Professor");
const Usuario = require("../models/Usuario");
const Permissao = require("../models/Permissao");
const Aula = require("../models/Aula");

module.exports = {
  async index(req, res) {
    const { id_professor } = req.params;

    const professor = await Professor.findByPk(id_professor, {
      include: [
        {
          model: Usuario,
          as: "usuario",
        },
        {
          model: Pessoa,
          as: "pessoa",
        },
        {
          model: Aula,
          as: "aulas",
        },
      ],
    });

    if (!professor) {
      return res.status(400).json({ error: "Professor não encontrado!" });
    }

    return res.json(professor);
  },

  async getAll(req, res) {
    const professores = await Professor.findAll({
      include: [
        {
          model: Usuario,
          as: "usuario",
        },
        {
          model: Pessoa,
          as: "pessoa",
        },
        {
          model: Aula,
          as: "aulas",
        },
      ],
    });
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

    const [permissao] = await Permissao.findOrCreate({
      where: { nome: "professor" },
    });

    await usuario.addPermissoes(permissao);
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

    if (!professor) {
      return res.status(400).json({ error: "Professor não encontrado!" });
    }

    const usuario = await Usuario.findByPk(professor.id_usuario);
    const pessoa = await Pessoa.findByPk(professor.id_pessoa);

    usuario.update({ nome_usuario, senha });
    pessoa.update({ nome, email, data_nascimento, descricao, formacao });

    return res.json(professor);
  },
  async delete(req, res) {
    const { id_professor } = req.params;
    const professor = await Professor.findByPk(id_professor);

    if (!professor) {
      return res.status(400).json({ error: "Professor não encontrado!" });
    }

    professor.destroy();

    return res.json("Exclusão realizada com sucesso!");
  },
};
