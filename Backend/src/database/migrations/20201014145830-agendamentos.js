"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("agendamentos", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      admitido: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      id_aluno: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "alunos", key: "id" },
      },
      id_professor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "professores", key: "id" },
      },
      id_aula_horarios: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "aula_horarios", key: "id" },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("agendamentos");
  },
};
