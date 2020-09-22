"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("aula_horarios", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_aula: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "aulas", key: "id" },
      },
      id_horario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "horarios_disponiveis", key: "id" },
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
    await queryInterface.dropTable("aula_horarios");
  },
};
