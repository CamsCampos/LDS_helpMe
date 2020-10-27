const AulaHorarios = require("../models/AulaHorarios");
const Aula = require("../models/Aula");
const Professor = require("../models/Professor");
const Pessoa = require("../models/Pessoa");
const Horario = require("../models/HorarioDisponivel");

module.exports = {
  async get(req, res) {
    const aulaHorarios = await AulaHorarios.findAll({
      include: [
        {
          model: Aula,
          as: "aula",
          include: [
            {
              model: Professor,
              as: "professor",
              include: {
                model: Pessoa,
                as: "pessoa",
              },
            },
          ],
        },
        {
          model: Horario,
          as: "horario",
        },
      ],
      where: { ocupado: false },
    });
    return res.json(aulaHorarios);
  },
};
