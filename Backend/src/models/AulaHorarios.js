const { Model, DataTypes } = require("sequelize");

class AulaHorarios extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        ocupado: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: "aula_horarios",
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Agendamento, {
      foreignKey: "id_aula_horarios",
    });
    this.belongsTo(models.Aula, {
      foreignKey: "id_aula",
      as: "aula",
    });
    this.belongsTo(models.HorarioDisponivel, {
      foreignKey: "id_horario",
      as: "horario",
    });
  }
}

module.exports = AulaHorarios;
