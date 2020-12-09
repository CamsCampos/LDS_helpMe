"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("notificacoes", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      visualizado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "usuarios", key: "id" },
      },
      id_pessoa_remetente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "pessoas", key: "id" },
      },
      id_aula_horario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "aula_horarios", key: "id" },
      },
      tipo: {
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
    await queryInterface.dropTable("notificacoes");
  },
};
