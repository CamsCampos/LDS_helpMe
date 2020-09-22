const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Pessoa = require("../models/Pessoa");
const Professor = require("../models/Professor");
const Aula = require("../models/Aula");
const HorarioDisponivel = require("../models/HorarioDisponivel");
const Usuario = require("../models/Usuario");
const Permissao = require("../models/Permissao");

const connection = new Sequelize(dbConfig);

//My connection
Pessoa.init(connection);
Professor.init(connection);
Aula.init(connection);
HorarioDisponivel.init(connection);
Usuario.init(connection);
Permissao.init(connection);

//My association
Pessoa.associate(connection.models);
Professor.associate(connection.models);
Aula.associate(connection.models);
HorarioDisponivel.associate(connection.models);
Usuario.associate(connection.models);
Permissao.associate(connection.models);

// Pessoa.associate(connection.models);

module.exports = connection;
