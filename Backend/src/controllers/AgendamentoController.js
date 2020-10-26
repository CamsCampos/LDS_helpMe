const Agendamento = require("../models/Agendamento");
const Aula = require("../models/Aula");
const Horario = require("../models/HorarioDisponivel");
const AulaHorarios = require("../models/AulaHorarios");
const Professor = require("../models/Professor");
const Aluno = require("../models/Aluno");
const HorarioDisponivel = require("../models/HorarioDisponivel");

module.exports = {
  async index(req, res) {
    const { estado } = req.query;
    let agendamentos = null;

    if (estado == "emEspera") {
      agendamentos = await Agendamento.findAll({
        where: {
          admitido: null,
        },
      });
    } else if (estado == "admitido") {
      agendamentos = await Agendamento.findAll({
        where: {
          admitido: 1,
        },
      });
    } else if (estado == "naoAdmitido") {
      agendamentos = await Agendamento.findAll({
        where: {
          admitido: 0,
        },
      });
    } else {
      agendamentos = await Agendamento.findAll();
    }
    return res.json(agendamentos);
  },
  async getAluno(req, res) {
    const { materia, data } = req.query;
    const { id_aluno } = req.params;
    let whereStatementAula = {};
    let whereStatementHorario = {};

    if (materia) whereStatementAula.materia = materia;
    if (data) whereStatementHorario.dia = data;

    let agendamentos = await Agendamento.findAll({
      include: [
        {
          model: Professor,
          as: "professor",
          include: "pessoa",
        },
        {
          model: Aluno,
          as: "aluno",
          include: "pessoa",
        },
        {
          model: AulaHorarios,
          as: "aula_horario",
          include: [
            {
              model: Aula,
              as: "aula",
              where: whereStatementAula,
            },
            {
              model: HorarioDisponivel,
              as: "horario",
              where: whereStatementHorario,
            },
          ],
          required: true,
        },
      ],
      where: { id_aluno: id_aluno, admitido: true },
    });

    return res.json(agendamentos);
  },
  async getProfessor(req, res) {
    const { materia, data } = req.query;
    const { id_professor } = req.params;
    let whereStatementAula = {};
    let whereStatementHorario = {};

    if (materia) whereStatementAula.materia = materia;
    if (data) whereStatementHorario.dia = data;

    let agendamentos = await Agendamento.findAll({
      include: [
        {
          model: Professor,
          as: "professor",
          include: "pessoa",
        },
        {
          model: Aluno,
          as: "aluno",
          include: "pessoa",
        },
        {
          model: AulaHorarios,
          as: "aula_horario",
          include: [
            {
              model: Aula,
              as: "aula",
              where: whereStatementAula,
            },
            {
              model: HorarioDisponivel,
              as: "horario",
              where: whereStatementHorario,
            },
          ],
          required: true,
        },
      ],
      where: { id_professor: id_professor, admitido: true },
    });

    return res.json(agendamentos);
  },
  async store(req, res) {
    const { id_aluno } = req.params;
    const { id_aula_horarios } = req.body;

    const aluno = await Aluno.findByPk(id_aluno);

    if (!aluno) {
      return res.status(400).json({ error: "Aluno não encontrado!" });
    }

    const aulaHorarios = await AulaHorarios.findByPk(id_aula_horarios);

    if (!aulaHorarios) {
      return res.status(400).json({ error: "Horário de aula não encontrado!" });
    }

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
  async update(req, res) {
    const { id_agendamento } = req.params;
    const { admitido } = req.body;

    const agendamento = await Agendamento.findByPk(id_agendamento);

    if (!agendamento) {
      return res.status(400).json({ error: "Agendamento não encontrado!" });
    }

    agendamento.update({ admitido });

    return res.json(admitido);
  },
  async deleteAluno(req, res) {
    const { id_aluno, id_agendamento } = req.params;
    const aluno = await Aluno.findByPk(id_aluno);
    const agendamento = await Agendamento.findByPk(id_agendamento);

    if (!aluno) {
      return res.status(400).json({ error: "Aluno não encontrado!" });
    }

    if (!agendamento) {
      return res.status(400).json({ error: "Agendamento não encontrado!" });
    } else if (agendamento.id_aluno != id_aluno) {
      return res
        .status(401)
        .json({ error: "Agendamento não pertence a este aluno!" });
    }

    agendamento.destroy();

    return res.json("Exclusão realizada com sucesso!");
  },
  async deleteProfessor(req, res) {
    const { id_professor, id_agendamento } = req.params;
    const professor = await Professor.findByPk(id_professor);
    const agendamento = await Agendamento.findByPk(id_agendamento);

    if (!professor) {
      return res.status(400).json({ error: "Professor não encontrado!" });
    }

    if (!agendamento) {
      return res.status(400).json({ error: "Agendamento não encontrado!" });
    } else if (agendamento.id_professor != id_professor) {
      return res
        .status(401)
        .json({ error: "Agendamento não pertence a este professor!" });
    }

    agendamento.destroy();

    return res.json("Exclusão realizada com sucesso!");
  },
};
