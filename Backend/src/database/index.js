const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Pessoa = require("../models/Pessoa");
const Professor = require("../models/Professor");
const Aula = require("../models/Aula");
const HorarioDisponivel = require("../models/HorarioDisponivel");
const Usuario = require("../models/Usuario");
const Permissao = require("../models/Permissao");
const Aluno = require("../models/Aluno");
const AulaHorarios = require("../models/AulaHorarios");
const Agendamento = require("../models/Agendamento");

const connection = new Sequelize(dbConfig);

//My connection
Pessoa.init(connection);
Professor.init(connection);
Aula.init(connection);
HorarioDisponivel.init(connection);
Usuario.init(connection);
Permissao.init(connection);
Aluno.init(connection);
AulaHorarios.init(connection);
Agendamento.init(connection);

//My association
Pessoa.associate(connection.models);
Professor.associate(connection.models);
Aula.associate(connection.models);
HorarioDisponivel.associate(connection.models);
Usuario.associate(connection.models);
Permissao.associate(connection.models);
Aluno.associate(connection.models);
AulaHorarios.associate(connection.models);
Agendamento.associate(connection.models);

// Permissao.sync({ force: true }).then(() => {
//   console.log("Drop and Resync Db");
//   initial();
// });

// function initial() {
//   Permissao.create({
//     id: 1,
//     nome: "professor",
//   });

//   Permissao.create({
//     id: 2,
//     nome: "aluno",
//   });
// }

module.exports = connection;
