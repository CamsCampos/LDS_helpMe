const HorarioDisponivel = require("../models/HorarioDisponivel");
const Aula = require("../models/Aula");

module.exports = {
  async index(req, res) {
    const { id_aula } = req.params;

    const aula = await Aula.findByPk(id_aula, {
      include: {
        association: "horarios",
      },
    });

    return res.json(aula);
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
    // const { user_id } = req.params;
    // const { name } = req.body;
    // const user = await User.findByPk(user_id);
    // if (!user) {
    //   return res.status(400).json({ error: "Uuser not found!" });
    // }
    // const tech = await Tech.findOne({
    //   where: { name },
    // });
    // await user.removeTech(tech);
    // return res.json();
  },
};
