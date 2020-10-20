const Agendamento = require("../models/Agendamento");
const Aula = require("../models/Aula");
const AulaHorarios = require("../models/AulaHorarios");
const Professor = require("../models/Professor");

module.exports = {
  async index(req, res) {
    const agendamentos = await Agendamento.findAll();
    return res.json(agendamentos);
  },
  async store(req, res) {
    const { id_aluno } = req.params;
    const { id_aula_horarios } = req.body;

    const aulaHorarios = await AulaHorarios.findByPk(id_aula_horarios);
    const aula = await Aula.findByPk(aulaHorarios.id_aula);
    const professor = await Professor.findByPk(aula.id_professor);
    const id_professor = professor.id;

    const agendamento = await Agendamento.create({
      id_aluno,
      id_aula_horarios,
      id_professor,
    });

    return res.json(agendamento);
  },
};
