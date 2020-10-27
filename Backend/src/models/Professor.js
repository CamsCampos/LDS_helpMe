const { Model, DataTypes } = require("sequelize");

class Professor extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
        tableName: "professores",
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
    this.hasMany(models.Aula, {
      foreignKey: "id_professor",
      as: "aulas",
    });
    this.hasMany(models.Agendamento, {
      foreignKey: "id_professor",
    });
  }
}

module.exports = Professor;
