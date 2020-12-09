"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("mensagens", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      id_pessoa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "pessoas", key: "id" },
      },
      id_agendamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "agendamentos", key: "id" },
      },
      texto: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable("mensagens");
  },
};
