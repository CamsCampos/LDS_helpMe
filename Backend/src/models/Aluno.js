const { Model, DataTypes } = require("sequelize");

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
        tableName: "alunos",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Pessoa, {
      foreignKey: "id_pessoa",
      as: "pessoa",
      onDelete: "CASCADE",
      hooks: true,
    });
    this.belongsTo(models.Usuario, {
      foreignKey: "id_usuario",
      as: "usuario",
      onDelete: "CASCADE",
      hooks: true,
    });
  }
}

module.exports = Aluno;
