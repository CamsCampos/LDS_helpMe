const Notificacao = require("../models/Notificacao");
const Pessoa = require("../models/Pessoa");
const Usuario = require("../models/Usuario");
const AulaHorarios = require("../models/AulaHorarios");
const Aula = require("../models/Aula");
const HorarioDisponivel = require("../models/HorarioDisponivel");

module.exports = {
  async index(req, res) {
    const { id_usuario } = req.params;
    const notificacao = await Notificacao.findAll({
      include: [
        {
          model: AulaHorarios,
          as: "aulaHorario",
          include: [
            {
              model: Aula,
              as: "aula",
            },
            {
              model: HorarioDisponivel,
              as: "horario",
            },
          ],
        },
        {
          model: Pessoa,
          as: "remetente",
        },
        {
          model: Usuario,
          as: "usuario",
        },
      ],
      where: {
        id_usuario: id_usuario,
      },
    });

    return res.json(notificacao);
  },

  async getAll(req, res) {
    const notificacao = await Notificacao.findAll({
      include: [
        {
          model: AulaHorarios,
          as: "aulaHorario",
        },
        {
          model: Pessoa,
          as: "remetente",
        },
        {
          model: Usuario,
          as: "usuario",
        },
      ],
    });
    return res.json(notificacao);
  },
};
