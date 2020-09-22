const { Model, DataTypes } = require("sequelize");

class Aula extends Model {
  static init(sequelize) {
    super.init(
      {
        materia: DataTypes.STRING,
        custo_hora_aula: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "aulas",
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.HorarioDisponivel, {
      foreignKey: "id_aula",
      through: "aula_horarios",
      as: "Horario",
      onDelete: "CASCADE",
      hooks: true,
    });
    this.belongsTo(models.Professor, {
      foreignKey: "id_professor",
    });
  }
}

module.exports = Aula;
