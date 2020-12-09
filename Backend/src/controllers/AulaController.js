const Aula = require("../models/Aula");
const Professor = require("../models/Professor");

module.exports = {
  async index(req, res) {
    const { id_aula } = req.params;
    const aula = await Aula.findByPk(id_aula, {
      include: {
        association: "horarios",
      },
    });

    if (!aula) {
      return res.status(400).json({ error: "Aula não encontrada!" });
    }

    return res.json(aula);
  },

  async getAll(req, res) {
    const aulas = await Aula.findAll();
    return res.json(aulas);
  },

  async store(req, res) {
    const { id_professor } = req.params;
    const professor = await Professor.findByPk(id_professor);

    if (!professor) {
      return res.status(400).json({ error: "Professor não encontrado!" });
    }

    const { materia, custo_hora_aula } = req.body;

    const aula = await Aula.create({
      materia,
      custo_hora_aula,
      id_professor,
    });

    return res.json(aula);
  },

  async update(req, res) {
    const { id_aula } = req.params;
    const aula = await Aula.findByPk(id_aula);

    if (!aula) {
      return res.status(400).json({ error: "Aula não encontrada!" });
    }

    const { materia, custo_hora_aula } = req.body;

    aula.update({ materia, custo_hora_aula });

    return res.json(aula);
  },
};
