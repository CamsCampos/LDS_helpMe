const HorarioDisponivel = require("../models/HorarioDisponivel");
const Aula = require("../models/Aula");
const { Op } = require("sequelize");
module.exports = {
  async getAll(req, res) {
    const horarios = await HorarioDisponivel.findAll({
      include: [
        {
          model: Aula,
          as: "aulas",
        },
      ],
    });
    return res.json(horarios);
  },
  async store(req, res) {
    const { id_aula } = req.params;
    const { dia, horario_inicio, horario_fim } = req.body;

    const aula = await Aula.findByPk(id_aula);

    if (!aula) {
      return res.status(400).json({ error: "Aula não encontrada!" });
    }

    const aulasColididas = await Aula.findAll({
      include: [
        {
          association: "horarios",
          // Busca horários que colidem com o horario que foi informado
          where: {
            dia: dia,
            [Op.or]: [
              {
                horario_inicio: {
                  [Op.lte]: horario_inicio,
                },
                horario_fim: {
                  [Op.gte]: horario_inicio,
                },
              },
              {
                horario_inicio: {
                  [Op.lte]: horario_fim,
                },
                horario_fim: {
                  [Op.gte]: horario_fim,
                },
              },
              {
                horario_inicio: {
                  [Op.between]: [horario_inicio, horario_fim],
                },
              },
              {
                horario_fim: {
                  [Op.between]: [horario_inicio, horario_fim],
                },
              },
            ],
          },
        },
      ],
      where: {
        id_professor: aula.id_professor,
      },
    });

    if (aulasColididas.length > 0) {
      return res.status(400).json({
        error: "Horário de aula coincide com outras aulas do mesmo professor",
      });
    }

    const [horario] = await HorarioDisponivel.findOrCreate({
      where: { dia, horario_inicio, horario_fim },
    });

    // Cria o relacionamento entre aula e horário
    await aula.addHorario(horario);

    // await aula.addHorario(horario, {
    //   through: { ocupado: 1 },
    // });

    return res.json(horario);
  },

  async delete(req, res) {
    const { id_aula, id_horario } = req.params;

    const aula = await Aula.findByPk(id_aula);

    if (!aula) {
      return res.status(400).json({ error: "Aula não encontrada!" });
    }
    const horario = await HorarioDisponivel.findByPk(id_horario);

    if (!horario) {
      return res.status(400).json({ error: "Horario não encontrado!" });
    }

    await aula.removeHorario(horario);

    return res.json("Horario removido com sucesso!");
  },
};
