const Aula = require("../models/Aula");
const HorarioDisponivel = require("../models/HorarioDisponivel");
const Professor = require("../models/Professor");

module.exports = {
  async index(req, res) {
    const aulas = await Aula.findAll();
    return res.json(aulas);
  },
  async store(req, res) {
    const { id_professor } = req.params;

    const professor = await Professor.findByPk(id_professor);

    if (!professor) {
      return res.status(400).json({ error: "Professor não encontrado!" });
    }

    const {
      materia,
      custo_hora_aula,
      dia,
      horario_inicio,
      horario_fim,
    } = req.body;

    const aula = await Aula.create({
      materia,
      custo_hora_aula,
      id_professor,
    });

    const [horario] = await HorarioDisponivel.findOrCreate({
      where: { dia, horario_inicio, horario_fim },
    });

    await aula.addHorario(horario);

    return res.json(aula);
  },
  // async update(req, res) {
  //   const { id_aula } = req.params;
  //   const {
  //     materia,
  //     custo_hora_aula,
  //     dia,
  //     horario_inicio,
  //     horario_fim,
  //   } = req.body;

  //   const aula = await Aula.findByPk(id_aula);
  //   const horario = await HorarioDisponivel.findByPk();
  //   const pessoa = await Pessoa.findByPk(professor.id_pessoa);
  //   usuario.nome_usuario = nome_usuario;
  //   usuario.senha = senha;

  //   pessoa.nome = nome;
  //   pessoa.email = email;
  //   pessoa.data_nascimento = data_nascimento;
  //   pessoa.descricao = descricao;
  //   pessoa.formacao = formacao;

  //   pessoa.save();
  //   usuario.save();

  //   return res.json(professor);
  // },
  // async delete(req, res) {
  //   const { id_aula } = req.params;
  //   const aula = await Aula.findByPk(id_aula);

  //   aula.destroy();

  //   return res.json("Exclusão realizada com sucesso!");
  // },
};
