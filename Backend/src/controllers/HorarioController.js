const HorarioDisponivel = require("../models/HorarioDisponivel");
const Aula = require("../models/Aula");

module.exports = {
  async getAll(req, res) {
    const horarios = await HorarioDisponivel.findAll({
      include: {
        association: "aulas",
      },
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
    const [horario] = await HorarioDisponivel.findOrCreate({
      where: { dia, horario_inicio, horario_fim },
    });

    await aula.addHorario(horario);

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
