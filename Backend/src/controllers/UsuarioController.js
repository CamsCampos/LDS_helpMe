const Usuario = require("../models/Usuario");
const { Op } = require("sequelize");
const Professor = require("../models/Professor");
const Aluno = require("../models/Aluno");

module.exports = {
  async index(req, res) {
    const usuarios = await Usuario.findAll();

    return res.json(usuarios);
  },
  async post(req, res) {
    const { nome_usuario, senha } = req.body;

    let usuario = await Usuario.findOne({
      include: "permissoes",
      where: {
        [Op.and]: [
          {
            nome_usuario: nome_usuario,
          },
          {
            senha: senha,
          },
        ],
      },
    });

    if (!usuario)
      return res.status(401).json({ error: "Dados de usuário inválidos" });

    const permissao = usuario.permissoes[0].nome;

    if (permissao == "professor") {
      usuario = await Professor.findOne({
        where: {
          id_usuario: usuario.id,
        },
      });
    }

    if (permissao == "aluno") {
      usuario = await Aluno.findOne({
        where: {
          id_usuario: usuario.id,
        },
      });
    }

    usuario = usuario.toJSON();
    usuario.perfil = permissao;

    return res.json(usuario);
  },
};
