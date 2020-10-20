// const HorarioDisponivel = require("../models/HorarioDisponivel");
const AulaHorarios = require("../models/AulaHorarios");

module.exports = {
  async get(req, res) {
    const aulaHorarios = await AulaHorarios.findAll();
    return res.json(aulaHorarios);
  },
};
